// TODO: 移至 @reinhard2019/cw-calendar-translate
export type StemBranch =
  | '甲子'
  | '乙丑'
  | '丙寅'
  | '丁卯'
  | '戊辰'
  | '己巳'
  | '庚午'
  | '辛未'
  | '壬申'
  | '癸酉'
  | '甲戌'
  | '乙亥'
  | '丙子'
  | '丁丑'
  | '戊寅'
  | '己卯'
  | '庚辰'
  | '辛巳'
  | '壬午'
  | '癸未'
  | '甲申'
  | '乙酉'
  | '丙戌'
  | '丁亥'
  | '戊子'
  | '己丑'
  | '庚寅'
  | '辛卯'
  | '壬辰'
  | '癸巳'
  | '甲午'
  | '乙未'
  | '丙申'
  | '丁酉'
  | '戊戌'
  | '己亥'
  | '庚子'
  | '辛丑'
  | '壬寅'
  | '癸卯'
  | '甲辰'
  | '乙巳'
  | '丙午'
  | '丁未'
  | '戊申'
  | '己酉'
  | '庚戌'
  | '辛亥'
  | '壬子'
  | '癸丑'
  | '甲寅'
  | '乙卯'
  | '丙辰'
  | '丁巳'
  | '戊午'
  | '己未'
  | '庚申'
  | '辛酉'
  | '壬戌'
  | '癸亥';

export type Dynasty = '西汉';

export type Emperor =
  | '高祖'
  | '惠帝'
  | '高后'
  | '文帝'
  | '景帝'
  | '武帝'
  | '昭帝'
  | '宣帝'
  | '元帝'
  | '成帝'
  | '哀帝'
  | '平帝';

export type ChineseEraName =
  | '中元'
  | '后元'
  | '建元'
  | '元光'
  | '元朔'
  | '元狩'
  | '元鼎'
  | '元封'
  | '太初'
  | '天汉'
  | '太始'
  | '征(延)和'
  | '后元'
  | '始元'
  | '元凤'
  | '元平'
  | '本始'
  | '地节'
  | '元康'
  | '神爵'
  | '五凤'
  | '甘露'
  | '黄龙'
  | '初元'
  | '永光'
  | '建昭'
  | '竟宁'
  | '建始'
  | '河平'
  | '阳朔'
  | '鸿嘉'
  | '永始'
  | '元延'
  | '绥和'
  | '建平'
  | '元寿';

export type Month =
  | 1
  | -1
  | 2
  | -2
  | 3
  | -3
  | 4
  | -4
  | 5
  | -5
  | 6
  | -6
  | 7
  | -7
  | 8
  | -8
  | 9
  | -9
  | 10
  | -10
  | 11
  | -11
  | 12
  | -12; // 负数代表闰月

export interface Chronology {
  year: number; // 代表公元年，古历一月一号对应的公元年月日所在的年份
  dynasty: Dynasty;
  emperor: Emperor;
  stemBranch: StemBranch;
  chineseEraName?: ChineseEraName;
  annal: number; // 帝王纪年或年号纪年对应的年份
  months: ChronologyMonth[];
}

export interface ChronologyMonth {
  month: Month;
  firstDayStemBranch: StemBranch;
  days?: number; // 当月天数
}
