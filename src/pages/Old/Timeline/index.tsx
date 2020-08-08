import React, { useState } from 'react';
import { Timeline as TimelineInner, Tag } from 'antd';
import CWCalendarTranslate from '@reinhard2019/cw-calendar-translate';
import data, {
  IncidentType,
  Date,
  IncidentTypes,
  Incident,
} from '../data/houhanshu/timeline.json';
import memoizeOne from 'memoize-one';

const { CheckableTag } = Tag;

type TypeColorMap = {
  [x in IncidentType]: string;
};
const typeColorMap: TypeColorMap = IncidentTypes.reduce(
  (res: TypeColorMap, key) => {
    if (key === '灾害' || key === '战争') {
      res[key] = 'red';
    } else if (key === '救济') {
      res[key] = 'green';
    } else if (key === '年度总结' || key === '其他') {
      res[key] = 'gray';
    } else {
      res[key] = 'blue';
    }
    return res;
  },
  {} as TypeColorMap,
);

function dateToStr(date: Date | [Date, Date]) {
  const firstItem = date[0];
  if (Array.isArray(firstItem)) {
    return getDateStr(date[0] as Date) + ' - ' + getDateStr(date[1] as Date);
  }
  // 没有详细日期
  if (date.length < 4) {
    return getDateStr(date as Date);
  }
  const res = CWCalendarTranslate.getWesternCalendarDate2(date as any);
  if (res) {
    return res.format('y年M月D日');
  }
  // console.log(date);
  return getDateStr(date as Date);
  // return CWCalendarTranslate.getWesternCalendarDate2(date as any).format('y-MM-DD');
}

function getDateStr(date: Date) {
  const [yearName, year, month, day] = date;
  let res = yearName;
  if (year) {
    res += year + '年';
  }
  if (typeof month === 'string') {
    res += month;
  } else if (typeof month === 'number') {
    res += month < 0 ? '闰' + Math.abs(month) : month + '月';
  }
  if (day) {
    res += day + '日';
  }
  return res;
}

const dataFilter = memoizeOne(
  (data: Incident[], selectedTypes: IncidentType[]) => {
    if (!selectedTypes) {
      return data;
    }
    return data.filter((item) => selectedTypes.includes(item.type));
  },
);

const Timeline = () => {
  const [selectedTypes, setSelectedTypes] = useState([...IncidentTypes]);
  const filterData = dataFilter(data, selectedTypes);

  const typeFilterNode = (() => {
    return (
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ marginRight: 8 }}>分类:({filterData.length})</span>
        <CheckableTag
          checked={IncidentTypes.every((v) => selectedTypes.includes(v))}
          onChange={(checked) => {
            if (checked) {
              setSelectedTypes([...IncidentTypes]);
            } else {
              setSelectedTypes([]);
            }
          }}
        >
          全部
        </CheckableTag>
        {IncidentTypes.map((type) => (
          <CheckableTag
            key={type}
            checked={selectedTypes.includes(type)}
            onChange={(checked) => {
              if (checked) {
                setSelectedTypes([...new Set([...selectedTypes, type])]);
              } else {
                setSelectedTypes(selectedTypes.filter((v) => v !== type));
              }
            }}
          >
            {type}
          </CheckableTag>
        ))}
      </div>
    );
  })();

  return (
    <>
      {typeFilterNode}
      <TimelineInner
        reverse
        // mode="alternate"
        style={{ maxWidth: 1000, margin: 'auto', padding: '0 20px' }}
      >
        {filterData.map((item) => (
          <TimelineInner.Item
            key={item.id}
            color={typeColorMap[item.type]}
            dot={
              <Tag
                color={typeColorMap[item.type]}
                style={{ transform: 'scale(0.8)' }}
              >
                {item.type}
              </Tag>
            }
          >
            <div style={{ fontSize: 12 }}>
              {item.time && dateToStr(item.time)}
            </div>
            <div>{item.tags && item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            <div style={{ fontWeight: 'bold' }}>{item.title}</div>
            <div>{item.incident}</div>
            <div style={{ color: 'gray', fontSize: 12 }}>{item.source}</div>
          </TimelineInner.Item>
        ))}
      </TimelineInner>
    </>
  );
};

export default Timeline;
