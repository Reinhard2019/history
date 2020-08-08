// a.match(/\[.*?\]/g)

import { StemBranch } from '@reinhard2019/cw-calendar-translate/lib/types';

interface Incident {
  name?: string;
  time: [string, number?, number?, StemBranch?];
  antecedent?: string; // 前因
  incident: string; // 事件详情
  aftereffect?: string; // 后果
  place?: string;
}

interface Character {
  name: string;
  posthumousName: string; // 谥号
  timeline: Incident[];
}

// 人名：@@
// 官职：～～
// 地名：##
// 书籍：《》
const data: Character = {
  name: '刘秀',
  posthumousName: '光武',
  timeline: [
    {
      time: ['新太祖天凤'],
      place: '长安',
      incident: '@光武帝@来到#长安#，学习《尚书》，粗略弄懂了书中的内容。',
    },
    {
      time: ['新太祖地皇', 3, 10],
      place: '宛城',
      incident: '@光武帝@与@李通@及其堂弟@李轶@等人在#宛城#起兵。',
    },
    {
      time: ['新太祖地皇', 3, 11],
      place: '舂陵',
      incident: '@光武帝@率领宾客返回#舂陵#。',
      aftereffect:
        '@刘伯升@招募新市、平林的军队，与其统帅王凤、陈牧一起向西攻打#长聚#。@光武帝@初骑牛，杀死了～新野县尉～之后才得到马。他们又进攻扫平了#唐子乡#，随后又杀死了～湖阳县尉～。发兵攻占了棘阳，又同@王莽@[～前队大夫～@甄阜@]、[～属正～@梁丘赐@]在#小长安#交战，汉军被打得大败，便回军退守#棘阳#。',
    },
    {
      time: ['淮阳王更始', 1, 2, '辛巳'],
      incident:
        '拥立@刘玄@为圣公天子，刘玄任[@刘伯升@为～大司徒～]，[@光武帝@为～太常偏将军～]。',
    },
    {
      time: ['淮阳王更始', 1, 3],
      incident:
        '@光武帝@另外和众将去攻取#昆阳#、#定陵#、#郾#，都攻克了。得到了许多牛、马、财物，还得到了数十万斛粮食。@光武帝@将这些物品转运给围攻#宛城#的军队。',
    },
    {
      time: ['淮阳王更始', 1, 5],
      place: '颍川',
      antecedent:
        '@王莽@得知@甄阜@、@梁丘赐@已经被杀，汉帝已经即位的消息。心中大为恐惧，于是派遣[～大司徒～@王寻@]、[～大司空～@王邑@]率兵马百万，其中身着铠甲的士兵四十二万人，',
      incident: '于五月到达#颍川#，重新与@严尤@、@陈茂@会合。',
    },
    {
      name: '昆阳之战',
      time: ['淮阳王更始', 1, 5],
      place: '昆阳',
      antecedent:
        '@王莽@得知@甄阜@、@梁丘赐@已经被杀，汉帝已经即位的消息。心中大为恐惧，于是派遣[～大司徒～@王寻@]、[～大司空～@王邑@]率兵马百万，其中身着铠甲的士兵四十二万人，',
      incident: '于五月到达#颍川#，重新与@严尤@、@陈茂@会合。',
      aftereffect: '王莽军包围@光武帝@等人于#昆阳#，@光武帝@突围出去请援。',
    },
    {
      name: '昆阳之战',
      time: ['淮阳王更始', 1, 6, '己卯'],
      incident:
        '@光武帝@大破王莽军，杀死@王寻@，@王邑@、@严尤@、@陈茂@逃走。缴获了王莽军的全部粮草和辎重，车辆盔甲和珍宝。',
      aftereffect:
        '@光武帝@率军攻下#颍阳县#。@刘伯升@被@更始帝@所害，@光武帝@从#父城#赶到#宛城#谢罪。@更始帝@授给[@光武帝@～破虏大将军～]的官职，封为武信侯。',
    },
    {
      // name: '',
      time: ['淮阳王更始', 1, 9, '庚戌'],
      incident:
        '#三辅#@的豪杰一齐杀死了@王莽@，把他的头送到#宛城#。@更始帝@将北上到#洛阳#建都，便让@光武帝@代理#～司隶校尉～的官职，委派他前往#洛阳#整修公府，@光武帝@于是设置下属官员和办事机构，起草公文，以从事司察之职，一切都按照过去的章程办理。',
      aftereffect:
        '等到@更始帝@来到#洛阳#之后，便委派@光武帝@任～破虏将军～行驶～大司马～的职务。',
    },
    {
      time: ['淮阳王更始', 1, 10],
      incident:
        '@光武帝@带着符节向北渡过#黄河#，前往安抚各州郡。他每到巡视的郡县，就会见年俸二千石的郡县官员、长吏、三老、下属官员，直至各部门的佐吏们，考察他们的政绩好坏并加以罢免或提升，就像州牧巡查所属的郡国一样。@光武帝@还立即平凡冤案，遣返囚徒，废除@王莽@时制定的苛刻政令，恢复汉朝的官名。',
    },
    {
      time: ['淮阳王更始', 1, 12],
      antecedent:
        '@光武帝@行进到#邯郸#，原@赵缪王@的儿子@刘林@向光武帝献策说：“赤眉军现在河东，只要决开黄河水淹灌他们，就可以使他们百万人马变成鱼虾。”@光武帝@没有理睬，离开了此地前往#真定#。@刘林@于是弄虚作假让从事占卜职业的@王郎@冒充成帝的儿子刘子舆。',
      incident: '@刘林@立@王郎@为天子，定都#邯郸#，就派遣使者招降郡国。',
    },
    {
      time: ['淮阳王更始', 2, 1],
      incident:
        '@光武帝@因为@王郎@新近强盛起来，便率军北上巡行到达#蓟县#。@王郎@发出檄文捉拿@光武帝@，已故广阳王的儿子刘接在#蓟县#城内起兵响应王郎。光武帝出逃，经饶阳，下博，后至信都。[~信都太守~@任光@]打开城门迎接。于是光武帝调发周围各县的兵马，得到四千人，先去攻打堂阳、贳县，这两处的守将都投降了。王莽的[～和成卒正～@邳彤@]也率全郡投降。又有昌城县人刘植，宋子县人耿纯，各自率领自己同宗的亲属和子弟，占据了各自的县城，都拥戴光武帝。于是又向北降服了下曲阳县，兵马渐渐都聚集起来，乐于依附光武帝都队伍达到了好几万人。',
    },
  ],
};

export default data;