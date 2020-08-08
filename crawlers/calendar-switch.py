import requests
import json
import codecs
import os

# 保存文件地址
file_path = './ancient-calendar.json'

def fetch():
  if os.path.exists(file_path):
    # 下载中断时，读取已下载文件继续下载
    with open(file_path, 'r') as f:
      result = json.loads(f.read())
  else:
    yearResp = requests.get('https://www.lishichelun.com/libs/hdr.json?v=2')
    result = yearResp.json()

  try:
    for country in result:
      for emperor in country['emperors']:
        for reign in emperor['emperorReigns']:
          if reign['startWesternyear'] <= 0:
            continue

          for year in range(reign['startyear'], reign['yearcount'] + 1):
            if 'years' not in reign:
              reign['years'] = []

            if len(reign['years']) >= year:
              continue

            monthResp = requests.get('https://www.lishichelun.com/api/calendar/get-ey-month?reign=' + reign['slug'] + '&year=' + str(year))
            reign['years'].append(monthResp.json()['data']['monthData'])
            print(reign['startWesternyear'], reign['slug'], year)
  except:
    print(monthResp.url)
    print('重新抓取中...')
    fetch()
  finally:
    with open(file_path, 'w') as f:
      f.write(json.dumps(result, ensure_ascii=False))

fetch()