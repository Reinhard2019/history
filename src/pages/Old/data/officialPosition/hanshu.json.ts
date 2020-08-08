import { OfficialPositionT } from "/@/OfficialPosition";

// 凡中二千石，丞比千石。
// 二千石，丞、长吏六百石
// 比二千石，丞比六百石。
// 县令、国相官为千石，丞、尉四百石
// 六百石，丞、尉三百石
// 县长、侯国相官四百石及三百石者，丞、尉二百石
// 诸侯、公主，家丞比百石
// 边境要塞的尉、各陵墓的校尉长，二百石

// 西汉官制
const data: OfficialPositionT[] = [
  // {
  //   name: '太师',
  //   ribbon: '金印紫绶',
  //   salary: '万石',
  // },
  {
    name: '太傅',
    alias: '上公',
    ribbon: '金印紫绶',
    salary: '万石',
    job:
      '执掌以善劝导天子，无日常职事。光武帝人名卓茂为太傅，卓茂去世后，遂省去不设。此后每皇帝即位之初，照例设太傅录尚书事。其人去世则不再设。',
  },
  // {
  //   name: '太保',
  //   ribbon: '金印紫绶',
  //   salary: '万石',
  // },
  {
    name: '太尉',
    ribbon: '金印紫绶',
    salary: '万石',
    dataRange: [
      {
        name: '太尉',
        startTime: ['高祖', undefined, 2],
        endTime: ['高祖', undefined, 5],
      },
      {
        name: '太尉',
        startTime: ['高祖', undefined, 11],
        endTime: ['高祖', undefined, 11, 12], // TODO: 周勃功代后官省
      },
      {
        name: '太尉',
        startTime: ['惠帝', undefined, 6], // 周勃为太尉
        endTime: ['文帝', undefined, 3], // 并于丞相
      },
      {
        name: '太尉',
        startTime: ['景帝', undefined, 3], // 周亚夫为太尉
        endTime: ['景帝', undefined, 7], // 罢周亚夫太尉官，改任丞相
      },
      {
        name: '太尉',
        startTime: ['武帝', '建元', 1], // 武安侯田蚡为太尉
        endTime: ['武帝', '建元', 2], // 太尉田蚡免
      },
      {
        name: '大司马', // 初置大司马，以冠将军之号。？？？
        startTime: ['武帝', '元狩', 4],
        endTime: ['宣帝', '地节', 3],
      },
      {
        name: '大司马', // 不冠将军，亦无印绶官署
        startTime: ['宣帝', '地节', 3],
        endTime: ['成帝', '绥和', 1],
      },
      {
        name: '大司马', // 初赐金印紫绶，置官署，禄比丞相，去将军
        startTime: ['成帝', '绥和', 1],
        endTime: ['哀帝', '建平', 2],
      },
      {
        name: '大司马', // 复去大司马印绶、官署，冠将军如故
        startTime: ['哀帝', '建平', 2],
        endTime: ['哀帝', '元寿', 2],
      },
      {
        name: '大司马', // 复赐大司马印绶，置官署，去将军，位在司徒上
        startTime: ['哀帝', '元寿', 2],
        // endTime: ['光武', '建武', 27],
      },
      // {
      //   name: '太尉',
      //   startTime: ['光武', '建武', 27],
      //   endTime: ['灵帝末'],
      // },
      // {
      //   name: '大司马与太尉并置', // 刘虞为大司马，太尉如故
      //   startTime: ['灵帝末'],
      // },
    ],
    job: `
      1. 执掌全国军事及考核官员的政绩，岁末及奏报其优劣并加以赏罚。
      2. 国家举行祭祀大典时，主持第二次献爵礼。
      3. 皇帝、皇后、及皇世子丧礼，则赴南郊向上天祭告死者的谥号。
      4. 当国家有大举措或疑难之事时，则与司徒、司空共同商议。
      5. 皇帝有失误时，则与司徒、司空二公共同劝谏。
    `,
    children: [
      {
        name: '长史',
        salary: '千石',
        job: '代理各曹事务。',
      },
      {
        name: '掾史属',
        count: 24,
      },
    ],
  },
  {
    name: '司徒(丞相)',
    ribbon: '金印紫绶',
    salary: '万石',
    job: `
      1. 选用官吏之权；
      2. 劾案百官和执行诛罚之权；
      3. 主管郡国上计与考课之权；
      4. 总领百官朝议与奏事之权；
      5. 封驳与谏诤之权；
    `,
    children: [
      {
        name: '司直',
        salary: '比二千石',
        job:
          '掌佐丞相，督录诸州事，主管监察检举（在这方面位在司隶校尉上，有所会，居中二千石前），属官中地位最高。', // 监察
        // dataRange: [['武帝元狩五年', '光武建武十一年']],
        remark:
          '《后汉书·马严传》：“故事，州郡所举，上奏，司直察能否，以惩虚实。”',
      },
      {
        name: '长史',
        salary: '千石',
        count: 2, // 文帝时有两长史
        job:
          '众史之长，职无不监。佐助丞相，署理诸曹之职。可以出席朝廷会议（或者是代表丞相参与其事），还可奉诏干涉地方事务。',
        // dataRange: [['文帝二年']],
        remark:
          '“汉初置相国史,秩五百石。后罢。并为丞相史。"(《汉旧仪》) “文帝二年,复置一丞相,有两长史。" (《汉书.百官公卿表》)',
      },
      {
        name: '丞相征事',
        salary: '比六百石',
        job: '',
        remark:
          '“皆故吏二千石不以臧罪免者为徵事。”(《汉书·昭帝纪》)张晏注引《汉仪注》)“任宫以故丞相徵事手捕反者。”(《汉书·功臣表》)',
      },
      {
        name: '丞相史',
        salary: '四百石',
        count: 20,
        job: '',
        remark: '《汉书·沟洫志》有丞相史杨焉、孙禁。',
      },
      {
        name: '东曹掾',
        salary: '六百石（或四百石）',
        count: 9,
        job:
          '“初，出督州为刺史。”（《汉旧仪》）武帝置部刺史后，东曹掾职掌有变更，《汉书·丙吉传》补注：“东曹主二千石长吏迁除及军吏”',
        remark:
          '“严延年父为东曹掾。”（《汉书》本传）吉善其（驭吏）言，召东曹案边长吏，琐科条其人。（《汉书・丙吉传》）',
      },
      {
        name: '西曹掾',
        salary: '六百石（或四百石）',
        count: 6,
        job:
          '初“领百官奏事”（《汉旧仪》）。后有变更，《丙吉传》补注：“西曹主府吏署用”。',
        remark:
          '《汉书·萧望之传》 : “萧由为丞相西曹缘。”《丙吉传》有西曹主吏。',
      },
      {
        name: '丞相少史',
        salary: '三百石（或四百石）',
        count: 80,
        job: '',
        remark: '《汉书·昭帝纪》有丞相少史王寿。',
      },
      {
        name: '集曹掾',
        salary: '比三百石',
        job: '',
        remark: '“匡衡补陆赐集曹操”。(《汉书》本传)',
      },
      {
        name: '奏曹',
        salary: '',
        job: '',
        remark: '《汉书·匡衡传》: “主簿陆赐故居奏曹。"',
      },
      {
        name: '议曹',
        salary: '',
        job: '',
        remark: '《汉书·翟方进传》有议曹李寻。',
      },
      {
        name: '侍曹',
        salary: '',
        job: '',
        remark: '《汉书·陈遵传》',
      },
      {
        name: '主簿',
        salary: '',
        job: '',
        remark: '《匡衡传》有主簿陆赐。',
      },
      {
        name: '丞相属',
        salary: '比二百石',
        job: '',
        remark: '《汉书・地理志》朱赣。',
      },
      {
        name: '大车属',
        salary: '比二百石',
        job: '',
        remark: '郑崇为丞相大车属（《汉书》本传）',
      },
      {
        name: '从史',
        salary: '',
        job: '',
        remark: '匡衡遺从史之僮取田租（《汉书》本传',
      },
      {
        name: '令史',
        salary: '',
        job: '',
        remark: '《宋书・百官志》。',
      },
      {
        name: '计相',
        salary: '',
        job: '领郡国上计',
        remark:
          '“张苍为计相一月，更以列侯为主计四岁。萧何为相国，令苍以列侯居相府领郡国上计者。”（《汉书・张苍传》',
      },
      {
        name: '计室掾史',
        salary: '',
        job: '主郡国上计事',
        remark:
          '《汉旧仪》：“郡国守丞长史上计事竟遣，君侯出坐庭上，亲问百姓所疾苦，计室掾史一人大音者，读勅毕遣。”',
      },
    ],
  },
  {
    name: '司空(御史大夫)',
    ribbon: '银印青绶',
    salary: '比二千石',
    experience:
      '武帝时中朝尚书权力逐渐发展，职权转移于尚书。成帝绥和元年，更名为大司空，金印紫绶，禄比丞相，身份和地位提高了，但职权却相反。哀帝建平二年，复为御史大夫。元寿二年，复为大司空。建武二十七年，改为司空。御史中丞领侍御史独立发展后，司空徒具虚名而已。',
    job:
      '主持副丞相的工作，主管图籍秘书、四方文书，熟知法度律令，握有考课、监察和弹劾之权。有时还可以奉命督兵出征。',
    subordinates:
      '御史大夫的属官，除御史中丞外，共有御史四十五人，分别由两丞领录。给事殿中者，曰侍御史，员十五人。',
    // dataRange: [
    //   ['-0206', '-0008-04']
    // ],
    children: [
      {
        name: '御史丞',
        salary: '千石',
        job: '领御史三十人留寺，理百官事。',
        remark: '《汉旧仪》',
      },
      // {
      //   name: '御史中丞',
      //   salary: '千石',
      //   experience:
      //     '成帝时，御史大夫更名为大司空后，置长史如中丞，官职如故。元寿二年，复为大司空后，御史中丞更名为御史长史。东汉光武以御史中丞为御史台主，后又属少府。成为了独立的监察官，后台的御史台即由此发展而来。东汉初，御史中丞为京师显官，光武特诏御史中丞与司隶校尉、尚书令在朝会时并专席而坐，故京师独号“三独坐”。其时御史又称宪台，与尚书、谒者并称“三台”。',
      //   job: `
      //     在殿中兰台，掌图籍秘书，外督部刺史，内领侍御史员十五人，受公卿奏事，举劾按章。
      //     1. 掌图籍秘书；
      //     2. 外督部刺史（秦制以御史监郡，汉省，由丞相遣史分刺州，不常置，后武帝正式设立州刺史十三人，隶属御史中丞。）；
      //     3. 内领侍御史十五人（盖汉宫中事，皆御史中丞所掌，故用其印封。）；
      //     4. 受公卿奏事，举劾案章（监察之职，宫内、殿中执法，所以又叫中执法）；
      //     除上述外，在西汉时还参与逃捕盗贼，东汉时进而出督军旅，受命将兵。
      //   `,
      //   remark: '《汉书·百官公卿表》',
      //   children: [
      //     {
      //       name: '侍御史',
      //       count: 15,
      //       children: [
      //         {
      //           name: '符玺御史',
      //           salary: '六百石',
      //           job: '掌符玺',
      //           remark: '《汉书・周昌传》：赵尧为符玺御史。',
      //         },
      //         {
      //           name: '治书（或持书）御史',
      //           salary: '六百石',
      //           job: '掌以法律当其是非。',
      //           remark:
      //             '《后汉书・百官志》注引胡广日：“（宣）帝幸宣室，斋居而决事，令侍御史二人治书，治书）待御史起此。”',
      //         },
      //         {
      //           name: '绣衣御史',
      //           salary: '六百石',
      //           job: '逐捕盗贼，治理大狱。',
      //           remark:
      //             '始置于武帝时，不常置，或称直指绣衣使者。王莽时改称绣衣执法。见《汉书・王传》、《江充传》、《元后传》及《后汉书·伏湛传》。',
      //         },
      //         {
      //           name: '五曹御史',
      //           salary: '六百石',
      //           job: `
      //         令曹：掌律令。
      //         印曹：掌刻印。
      //         供曹：掌斋祠。
      //         尉马曹：掌厩马。
      //         乘曹：掌护驾。
      //       `,
      //           remark: '《晋书・职官志》。',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        name: '御史掾',
        remark: '严延年为御史掾（《汉书》本传）。',
      },
      {
        name: '御史属',
        remark: '谷永、国衡均曾为御史属（《汉书》本传）。',
      },
      {
        name: '主簿',
        remark: '孙宝为御史大夫主簿（《汉书》本传）。',
      },
      {
        name: '少史',
        remark: '见《汉书・萧望之传》。',
      },
      {
        name: '柱下令',
        remark:
          '高帝五年王恬为柱下令（《汉书・高帝纪》）应劭《汉官仪》侍御史即柱下史。',
      },
      {
        name: '御史中丞从事',
        remark: '于定国与御史中承从事治反者狱（《汉书》本传）。',
      },
    ],
  },
  // {
  //   name: '前后左右将军',
  //   ribbon: '银印青绶',
  //   salary: '万石',
  //   job: '掌管军队以及四夷',
  //   other: '上卿，汉朝不常设，有时有前后将军，有时有左右将军',
  //   children: [
  //     {
  //       name: '长史',
  //       // ribbon: '长史',
  //       salary: '千石',
  //     },
  //   ],
  // },
  {
    name: '太常',
    salary: '中二千石',
    jobTypes: ['宗庙', '教育'],
    job: `
      官居清要，常以列侯、忠孝敬慎者为之。
      1. 九卿之首，主宗庙礼仪。祭祀之前，先上奏祭祀礼仪；举行祭祀大典时，则引导皇帝行礼。大射礼、养老礼、皇帝皇后及皇世子丧礼，都上奏所行礼仪。每月月初月终，巡视各处陵墓祠庙。
      2. 考选博士时，上奏其才能高下。置博士弟子员之事，从选拔、教育到补吏都是由太常负责，但严格来说，博士不能算是太常的属官。
    `,
    other:
      '秦曰奉常，它和宗正管理的事务，在秦以前是一个官主管的，从秦开始分为两官。',
    children: [
      {
        name: '太常丞',
        salary: '比千石',
        job: '掌管小规模的礼仪和祭祀，总理各曹事务。',
      },
      {
        name: '太史令',
        salary: '六百石',
        job:
          '掌管天文历法，年终时，奏上新年的年历。国家举行祭祀及婚丧大典时，掌管上奏吉日及时节禁忌之事。国家有吉祥的征兆、自然灾害或异常情况时，负责记载。',
        children: [
          {
            name: '太史令丞',
          },
          {
            name: '明堂丞',
            salary: '二百石',
            job: '负责守卫明堂。',
          },
          {
            name: '灵台丞',
            salary: '二百石',
            job: '负责守卫灵台，观测日月星辰。',
          },
        ],
      },
      {
        name: '博士祭酒（博士仆射）',
        salary: '六百石',
        job: '国家有疑难之事，负责奏对答疑。相当于皇帝的顾问。',
        children: [
          {
            name: '博士',
            salary: '比六百石',
            count: 14,
            job: `
              1. 《易》博士四名，施氏《易》、孟氏《易》、梁丘氏《易》、京氏《易》。
              2. 《尚书》博士三名，欧阳氏《尚书》、大夏侯《尚书》、小夏侯《尚书》。
              3. 《诗》博士三名，鲁《诗》、齐《诗》、韩氏《诗》。
              4. 《礼》博士二名，大戴氏《礼》、小戴氏《礼》。
              5. 《春秋》博士二名，严氏《公羊春秋》、颜氏《公羊春秋》。
            `,
          },
        ],
      },
      {
        name: '太祝令',
        salary: '六百石',
        job: '国家举行祭祀大典时，负责宣读祝文，并迎神送神。',
        children: [
          {
            name: '太祝令丞',
            job: '负责小祭祀时祝神',
          },
        ],
      },
      {
        name: '太宰令',
        salary: '六百石',
        job: '掌管屠宰工及鼎俎等祭器。国家举行祭祀大典时，负责陈设祭品。',
        children: [
          {
            name: '太宰令丞',
          },
        ],
      },
      {
        name: '大予乐令',
        salary: '六百石',
        job:
          '掌管乐伎乐器。国家举行祭祀大典时，负责恭请奏乐，国宴伴奏，负责陈设乐队安排奏乐次序。',
        children: [
          {
            name: '大予令丞',
          },
        ],
      },
      {
        name: '高庙令',
        salary: '六百石',
        job:
          '守护高祖祠庙，负责巡逻清扫。（《汉官》曰员吏四人，卫士一十五人。）',
      },
      {
        name: '世祖庙令',
        salary: '六百石',
        job: '守护世祖祠庙，负责巡逻清扫。（《汉官》曰员吏六人，卫士二十人。）',
      },
      {
        name: '陵园令（每先帝陵各有令一人）',
        salary: '六百石',
        job: '负责守护陵园，巡视清扫。',
        children: [
          {
            name: '陵园丞',
          },
          {
            name: '校长',
            job: '掌管护陵武装及捕捉盗贼事宜。',
          },
        ],
      },
      {
        name: '食官令（每先帝陵各有食官令一人）',
        salary: '六百石',
        job: '掌管每月十五、月终及时节祭祀。',
      },
    ],
  },
  {
    name: '光禄勋（郎中令）',
    salary: '中二千石',
    job:
      '掌管宫殿门户的值宿警卫事务，安排谒署郎轮番执戟，护卫宫门，考察其道德品行而加以升降。郊祀之时，主持第三次献爵礼。',
    other: `
      1. 原有左右曹，官秩二千石，居殿中，负责接受尚书奏事，加以商议省察。世祖裁撤两官，派小黄门郎接受奏事。
      2. 皇帝出行，给事黄门郎兼管。
      3. 又有请室令，皇帝出行，在车驾前请示目的地，巡行检查道路并迎接请示，以示慎重。东汉仅以郎兼任，事情结束后罢任。
      4. 又裁撤车郎将、户郎将、骑郎将三将，以及羽林令。
    `,
    children: [
      {
        name: '光禄勋丞',
        salary: '比千石',
      },
      {
        name: '五官中郎将',
        salary: '比二千石',
        isMilitary: true,
        job: '掌管五官郎',
        subordinates:
          '下属郎官无定员。凡郎官都负责轮番执戟，护卫各宫殿门，皇帝出行时则充任随行护卫。唯独议郎不参与轮值。',
        children: [
          {
            name: '五官中郎',
            salary: '比六百石',
            count: true,
          },
          {
            name: '五官侍郎',
            salary: '比四百石',
            count: true,
          },
          {
            name: '五官郎中',
            salary: '比三百石',
            count: true,
          },
        ],
      },
      {
        name: '左中郎将',
        salary: '比二千石',
        isMilitary: true,
        job: '主左署郎',
        children: [
          {
            name: '中郎',
            salary: '比六百石',
            count: true,
          },
          {
            name: '侍郎',
            salary: '比四百石',
            count: true,
          },
          {
            name: '郎中',
            salary: '比三百石',
            count: true,
          },
        ],
      },
      {
        name: '右中郎将',
        salary: '比二千石',
        isMilitary: true,
        job: '主右署郎',
        children: [
          {
            name: '中郎',
            salary: '比六百石',
            count: true,
          },
          {
            name: '侍郎',
            salary: '比四百石',
            count: true,
          },
          {
            name: '郎中',
            salary: '比三百石',
            count: true,
          },
        ],
      },
      {
        name: '虎贲中郎将',
        salary: '比二千石',
        job: '掌管虎贲郎值宿警卫事务。',
        children: [
          {
            name: '左右仆射',
            salary: '比六百石',
            job: '主管虎贲郎骑射训练。',
          },
          {
            name: '左右陛长',
            salary: '比六百石',
            job: '主管虎贲郎轮值宿卫，朝会大典时值宿殿中。',
          },
          {
            name: '虎贲中郎',
            salary: '比六百石',
          },
          {
            name: '虎贲侍郎',
            salary: '比四百石',
          },
          {
            name: '虎贲郎中',
            salary: '比三百石',
          },
          {
            name: '节从虎贲',
            salary: '比二百石',
            other:
              '自节从虎贲起任职长久者可以升迁，其中才能较高者可升至虎贲中郎。',
          },
        ],
      },
      {
        name: '羽林中郎将',
        salary: '比二千石',
        isMilitary: true,
        job: '掌管羽林郎',
        children: [
          {
            name: '羽林左监',
            salary: '六百石',
            job: '主羽林左骑',
            children: [
              {
                name: '羽林左监丞',
              },
            ],
          },
          {
            name: '羽林右监',
            salary: '六百石',
            job: '主羽林右骑',
            children: [
              {
                name: '羽林右监丞',
              },
            ],
          },
          {
            name: '羽林郎',
            salary: '比三百石',
            count: true,
            job: '掌管宿卫侍从。',
            other:
              '挑选汉阳、陇西、安定、北地、上郡、西和等六地两家子弟补任。原本武帝以骑手随从狩猎，回来后即值宿殿陛旁岩下室中，所以又称岩郎。',
          },
        ],
      },
      {
        name: '奉车都尉',
        salary: '比二千石',
        count: true,
        job: '掌管皇帝乘舆车。',
      },
      {
        name: '驸马都尉',
        salary: '比二千石',
        count: true,
        job: '掌管皇帝副车之马',
      },
      {
        name: '骑都尉',
        salary: '比二千石',
        count: true,
        job: '原监护羽林骑',
      },
      {
        name: '光禄大夫',
        salary: '比二千石',
        count: true,
        job:
          '凡大夫、议郎，都随时准备皇帝垂询，无日常事务，只听诏命所派遣。凡各国嗣君丧礼，则光禄大夫主持吊唁。',
      },
      {
        name: '太中大夫',
        salary: '千石',
        count: true,
      },
      {
        name: '中散大夫',
        salary: '六百石',
        count: true,
      },
      {
        name: '谏议大夫',
        salary: '六百石',
        count: true,
      },
      {
        name: '议郎',
        salary: '六百石',
        count: true,
      },
      {
        name: '谒者仆射',
        salary: '千石',
        job:
          '谒者台统领，掌管谒者，皇帝出行，引导车驾。古代重视习武，设置主射进行督责，所以称仆射。',
        children: [
          {
            name: '常侍谒者',
            salary: '比六百石',
            job: '主持宫殿中各时节礼仪。',
            count: 5,
          },
          {
            name: '给事谒者',
            salary: '四百石',
            job:
              '负责接待宾客主持礼仪接受职事，以及奏章通报。将、大夫以下丧礼，主管遣使吊唁。',
            other: '和灌谒者郎中一起，原定员七十名，东汉仅三十名。',
          },
          {
            name: '灌谒者郎中',
            salary: '比三百石',
            job:
              '负责接待宾客主持礼仪接受职事，以及奏章通报。将、大夫以下丧礼，主管遣使吊唁。',
            other:
              '和给事谒者一起，原定员七十名，东汉仅三十名。初任为灌谒者，一年后任给事谒者。',
          },
        ],
      },
    ],
  },
  {
    name: '卫尉',
    salary: '中二千石',
    job: '掌管宫门卫士，宫中巡查事宜。',
    other: '东汉裁撤旅贲令，卫士一人丞。', // ???
    children: [
      {
        name: '卫尉丞',
        salary: '比千石',
      },
      {
        name: '公车司马令',
        salary: '六百石',
        job:
          '掌管宫南阙门，接待官吏百姓上书，四方进献贡物，以及被征召至公车者。',
        children: [
          {
            name: '公车司马令丞',
            job: '选择通晓禁忌者担任，负责处理不法之事。',
          },
          {
            name: '公车司马令尉',
            job: '主管阙门守军禁令，防备突然事变。',
          },
        ],
      },
      {
        name: '南宫卫士令',
        salary: '六百石',
        job: '掌管南宫卫士。',
        children: [
          {
            name: '南宫卫士丞',
          },
        ],
      },
      {
        name: '北宫卫士令',
        salary: '六百石',
        job: '掌管北宫卫士。',
        children: [
          {
            name: '北宫卫士丞',
          },
        ],
      },
      {
        name: '左右都候',
        salary: '六百石',
        job: '主管剑戟士，负责巡查宫中，以及皇帝要求拘捕拷问的人。',
        children: [
          {
            name: '左右都候丞',
          },
        ],
      },
      {
        name: '（宫中旁门）司马',
        salary: '比千石',
        job: `
          宫中旁门，每门设司马一名。
          1. 南宫南屯司马，主管平城门；
          2. 宫门苍龙司马，主管东门；
          3. 玄武司马，主管玄武门；
          4. 北屯司马，主管北门；
          5. 北宫朱爵司马，主管南掖门；
          6. 东明司马，主管东门；
          7. 朔平司马，主管北门；
        `,
        other:
          '凡住在宫中的人，都在所属的宫门处存有名册。将所属的宫名两字，印在铁制的符信上，查验符信后方可入内。若外人因事需要入宫，本官府长吏给予密封的符信；有官位的人出入宫门时由赶车者说明其官职。',
      },
    ],
  },
  {
    name: '太仆',
    salary: '中二千石',
    job: '掌管车马。皇帝每次出行，奏请车驾扈从仪仗；皇帝乘大驾则亲自掌车。',
    other:
      '原设六厩，官员都是六百石令。东汉裁并，仅设一厩。此后设置左骏令、左骏厩，分别管理乘舆御马，时设时并。又有牧师苑，都设置令官，主管养马，分在河西等六郡疆界中，东汉全部裁撤，仅汉阳郡保留流马苑，只以羽林郎监管。',
    children: [
      {
        name: '太仆丞',
        salary: '比千石',
      },
      {
        name: '考工令',
        salary: '六百石',
        job:
          '主管制造兵器弓弩刀剑铠甲之类，成品则由执金吾存入武库，并管理织造绶带等杂工匠。',
        children: [
          {
            name: '左右丞',
          },
        ],
      },
      {
        name: '车府令',
        salary: '六百石',
        job: '主管皇帝各辆乘舆。',
        children: [
          {
            name: '车府丞',
          },
        ],
      },
      {
        name: '未央厩令',
        salary: '六百石',
        job: '主管皇帝乘舆及厩中马匹。',
        children: [
          {
            name: '长乐厩丞', // ???
          },
        ],
      },
    ],
  },
  {
    name: '廷尉',
    salary: '中二千石',
    job:
      '负责审理案件，奏请应判之罪。凡各郡国商议有疑问的案件，都根据罪行予以适当的判决。',
    other:
      '武帝以后设置中都官狱二十六所，光武帝建立东汉后裁撤各处令长，仅保留廷尉及洛阳诏狱。',
    children: [
      {
        name: '正监、左监、左平',
        salary: '六百石',
        job: '负责奉皇帝命令审理的案件。',
      },
    ],
  },
  {
    name: '大鸿胪',
    salary: '中二千石',
    job: `
      1. 掌管诸侯及四方归附的蛮夷。
      2. 国家举行祭祀大典时，接待导引宾客，奏请行礼，得到许可后，传命各司。
      3. 诸王入朝，负责到郊外迎接，主持其礼仪。
      4. 各郡国官吏、巡使从各地入朝报告全年人口、赋税、盗贼、狱讼情况时，亦由之接待。
      5. 皇子封王，协助授予印绶。
      6. 拜授诸侯、诸侯嗣子以及四方夷狄受封者，台下鸿胪召请拜任。
      7. 王去世，则遣使吊唁，并拜授嗣王。
    `,
    other:
      '汉初承秦制设典属国，分掌四方夷狄前来朝见进贡者及入朝作为人质的子弟，成帝时并入大鸿胪。东汉裁撤驿官、别火二令、二丞，以及郡邸长、郡邸丞，由令郎掌管郡邸事务。', // ??? 令郎是什么
    children: [
      {
        name: '大鸿胪丞',
        salary: '比千石',
      },
      {
        name: '大行令',
        salary: '六百石',
        job: '主管诸郎。',
        children: [
          {
            name: '大行丞',
            job: '治礼郎四十七人',
          },
        ],
      },
    ],
  },
  {
    name: '宗正',
    salary: '中二千石',
    job:
      '掌管登录各王各诸侯国嫡庶谱系，及各宗室亲属之间的远近关系，以及各郡国每年随着计簿报上的宗室名册。宗室中若有犯法其罪在剃发之刑以上者，先上报宗正，宗正奏闻皇帝，方可宣判执行。',
    other: '东汉以后裁撤都司空令及丞',
    children: [
      {
        name: '宗正丞',
        salary: '千石',
      },
      {
        name: '（每公主设）家令',
        salary: '六百石',
        children: [
          {
            name: '家令丞',
            salary: '三百石',
          },
        ],
      },
    ],
  },
  {
    name: '大司农',
    salary: '中二千石',
    job: `
      掌管钱谷金帛及各类货币。
      1. 各郡国每季度上报各月初一日现存钱谷的账簿，尚未缴齐的赋税，则另立账簿以区别。
      2. 边郡各官请求调度钱谷者，都予以调济，取多补少，互相补足。
    `,
    other:
      '各郡国的盐官、铁官原隶属大司农，东汉以后都归属各郡县。又有廪牺令，官秩六百石，掌管祭祀所用的牲畜鹅鸭之类。以及洛阳集市长、荥阳敖仓官员，东汉以后都归属河南尹。其余均输等官全部裁撤。',
    children: [
      {
        name: '大司农丞',
        salary: '千石',
      },
      {
        name: '部丞',
        salary: '六百石',
        job: '主管国库',
      },
      {
        name: '太仓令',
        salary: '六百石',
        job: '负责接纳各郡国漕运到京城的粮谷。',
        children: [
          {
            name: '太仓丞',
          },
        ],
      },
      {
        name: '平准令',
        salary: '六百石',
        job: `
          1. 负责平抑物价。
          2. 主管漂染丝帛，成彩色。
        `,
        children: [
          {
            name: '平准丞',
          },
        ],
      },
      {
        name: '导官令',
        salary: '六百石',
        job: '主管舂制御米，以及制作干粮。导，即选择。',
        children: [
          {
            name: '导官丞',
          },
        ],
      },
    ],
  },
  {
    name: '少府',
    salary: '中二千石',
    job: '掌管宫中使用的各种物品，如服饰珍宝美味佳肴之类。',
    other:
      '以下以职事隶属少府的，自太医令至上林苑令共四官。从侍中开始至御史中丞，全部是以文事归属少府。汉朝继承秦朝制度，凡山林湖泽陂塘池沼的税收，称为禁钱，由少府掌管。光武帝将此税收该归大司农掌管，考工令改属太仆，都水官则下属各郡国。孝武帝开始设置水衡都尉，官秩比二千石，分别主管上林苑中设置的离宫等皇帝休息之处，光武帝裁撤水衡官，将其职务并入少府。每年立秋祭兽出猎之日，即临时设置水衡都尉，事后罢任。少府原设六丞，裁撤无丞。又裁去汤官令、织室令，仅设置汤官丞、织室丞。又裁撤上林十池监，胞人长丞，宦者令、昆台令、佽飞令等三令及二十一丞。又裁去水衡属官如令、长、丞、尉等二十余名。章帝、和帝以后，宦官逐渐增多，增加尝药令、太官令、御者令、钩盾令、尚方令、考公令、别作监，官秩都是六百石，由宦者充任，其后改为兼任或隶属他官，有时则裁撤。',
    children: [
      {
        name: '少府丞',
        salary: '千石',
      },
      {
        name: '太医令',
        salary: '六百石',
        job: '掌管各医师。',
        children: [
          {
            name: '药丞',
            job: '主管药',
          },
          {
            name: '方丞',
            job: '主管药方',
          },
        ],
      },
      {
        name: '太官令',
        salary: '六百石',
        job: '掌管御用饮食',
        children: [
          {
            name: '左丞',
            job: '主管饮食',
          },
          {
            name: '甘丞',
            job: '用膳器具',
          },
          {
            name: '汤官丞',
            job: '主管酒类',
          },
          {
            name: '果丞',
            job: '主管果品',
          },
        ],
      },
      {
        name: '守宫令',
        salary: '六百石',
        job: '掌管御用纸笔墨，以及尚书所用各物与封泥。',
        children: [
          {
            name: '守宫丞',
          },
        ],
      },
      {
        name: '上林苑令',
        salary: '六百石',
        job: '主管苑中禽兽。苑中有不少居民，亦由令掌管。捕获禽兽则送缴太官令。',
        children: [
          {
            name: '上林苑丞',
          },
          {
            name: '尉',
          },
        ],
      },
      {
        name: '侍中',
        salary: '比二千石',
        count: true,
        job:
          '负责随侍皇帝左右，辅佐导引各事，并备咨询垂问。皇帝乘法驾出行，则选学识广博者一名陪乘，其他侍中全部骑马在乘舆后随行。原设仆射一名，东汉以后改为祭酒，时设时裁不定。',
      },
      {
        name: '中常侍',
        salary: '千石',
        count: true,
        isEunuch: true,
        job:
          '其后增加官秩到比二千石。负责随侍皇帝左右，出入内宫，辅佐引导内宫中各事，并备咨询垂问。',
      },
      {
        name: '给事黄门侍郎',
        salary: '六百石',
        count: true,
        job:
          '负责随侍皇帝左右，供职宫中，联络宫廷内外。诸王在宫殿朝见皇帝时，负责引导各王就座。',
      },
      {
        name: '小黄门',
        salary: '六百石',
        count: true,
        isEunuch: true,
        job:
          '负责随侍皇帝左右，接受尚书奏事。皇帝在内宫时，联络宫门内外，以及皇后所居中宫以下各事。各公主以及王太妃等有疾苦，则派小黄门问候。',
      },
      {
        name: '黄门令',
        salary: '六百石',
        isEunuch: true,
        job: '主管省中各宦者。',
        children: [
          {
            name: '黄门丞',
            isEunuch: true,
          },
          {
            name: '从丞',
            isEunuch: true,
            job: '主管出入随行。',
          },
        ],
      },
      {
        name: '黄门署长',
        salary: '四百石',
        ribbon: '黄绶',
        isEunuch: true,
        job: '主管中宫宫室',
      },
      {
        name: '画室署长',
        salary: '四百石',
        ribbon: '黄绶',
        isEunuch: true,
        job: '主管中宫宫室',
      },
      {
        name: '玉堂署长',
        salary: '四百石',
        ribbon: '黄绶',
        isEunuch: true,
        job: '主管中宫宫室',
      },
      {
        name: '丙署长',
        salary: '四百石',
        ribbon: '黄绶',
        count: 7,
        isEunuch: true,
        job: '主管中宫宫室',
      },
      {
        name: '中黄门冗从仆射',
        salary: '六百石',
        isEunuch: true,
        job:
          '主管中黄门冗从。皇帝在宫中则轮值护卫，守护宫门；出行则骑马随行，护卫乘舆两侧。',
      },
      {
        name: '中黄门',
        salary: '比百石',
        isEunuch: true,
        job: '负责在宫中供职。',
      },
      {
        name: '掖庭令',
        salary: '六百石',
        isEunuch: true,
        job: '掌管后宫贵人、采女等事宜。',
        children: [
          {
            name: '左右丞',
            isEunuch: true,
          },
          {
            name: '暴室丞',
            isEunuch: true,
            job:
              '主管宫中妇女有疾病者，在此室中医治；皇后、贵人犯罪，亦关押在此。',
          },
        ],
      },
      {
        name: '永巷令',
        salary: '六百石',
        isEunuch: true,
        job: '督责官婢侍奉驱使。',
        children: [
          {
            name: '永巷丞',
            isEunuch: true,
          },
        ],
      },
      {
        name: '御府令',
        salary: '六百石',
        isEunuch: true,
        job: '督责官婢制作后宫衣裳服饰及缝补浣洗等事。',
        children: [
          {
            name: '御府丞',
            isEunuch: true,
          },
          {
            name: '织室丞',
            isEunuch: true,
          },
        ],
      },
      {
        name: '祠祀令',
        salary: '六百石',
        jobTypes: ['祭祀'],
        job: '主管宫中各种小祭祀。',
        children: [
          {
            name: '祠祀丞',
            isEunuch: true,
          },
        ],
      },
      {
        name: '钩盾令',
        salary: '六百石',
        isEunuch: true,
        job: '掌管附近各池塘园林等游览之所。',
        children: [
          {
            name: '钩盾丞',
            salary: '三百石',
            isEunuch: true,
          },
          {
            name: '永安丞',
            salary: '三百石',
            isEunuch: true,
            other: '永安宫，是北宫东北一处独立的小宫殿名，周围有园林亭榭。',
          },
          {
            name: '苑中丞',
            salary: '二百石',
            job: '主管苑囿中的离宫。',
          },
          {
            name: '果丞',
            salary: '二百石',
            job: '主管果园',
          },
          {
            name: '鸿池丞',
            salary: '二百石',
            other: '鸿池，是池塘名，位于洛阳以东二十里。',
          },
          {
            name: '南园丞',
            salary: '二百石',
            other: '南园在洛水以南。',
          },
          {
            name: '濯龙监',
            salary: '四百石',
            other: '濯龙是园林名，在北宫附近。',
          },
          {
            name: '直里监',
            salary: '四百石',
            other: '直里是园林名，位于洛阳城西南角。',
          },
        ],
      },
      {
        name: '中藏府令',
        salary: '六百石',
        jobTypes: ['财政'],
        job: '掌管宫中币帛金银等财务。',
        children: [
          {
            name: '中藏府丞',
          },
        ],
      },
      {
        name: '内者令',
        salary: '六百石',
        job: '掌管宫中陈设各类洗沐用具。',
        children: [
          {
            name: '左右丞',
          },
        ],
      },
      {
        name: '尚方令',
        salary: '六百石',
        job: '掌管贡献手工制作的御用刀剑等好玩之物。',
        children: [
          {
            name: '尚方丞',
          },
        ],
      },
      {
        name: '尚书令',
        salary: '千石',
        job:
          '沿袭秦官制而设。武帝以宦者充任，改称中书谒者令。成帝重新任用士人，恢复旧称。掌管选用官吏以及陈奏并下达尚书各曹文书等事。',
      },
      {
        name: '尚书仆射',
        salary: '六百石',
        job: '代理尚书台事务，尚书令不在时则陈奏并下达各事。',
      },
      {
        name: '尚书',
        salary: '六百石',
        count: 6,
        job: `
          成帝初年设置尚书四名，分为四曹：
          1. 常侍曹尚书主管公卿事务
          2. 二千石曹尚书主管各郡国守相事务
          3. 民曹尚书主管官吏百姓上书事宜
          4. 客曹尚书主管外国夷狄事务
          光武帝遵循旧制，其后分二千石曹为二曹，又将客曹分为南主客曹、北主客曹，共六曹。
        `,
        children: [
          {
            name: '左丞',
            salary: '四百石',
            job: '主管官吏百姓奏章以及驺伯史。',
          },
          {
            name: '右史',
            salary: '四百石',
            job: '代理印绶，以及纸笔墨等财用库藏。',
          },
          {
            name: '侍郎',
            salary: '四百石',
            count: 36,
            job: '每曹六名，负责起草文书。',
          },
          {
            name: '令史',
            salary: '二百石',
            count: 18,
            job: '每曹三名，负责抄写。其后增加剧曹三人，合计二十一名。',
          },
          {
            name: '符节令',
            salary: '六百石',
            job: '任符节台统领，主官符节事务。派遣使者时负责授予符节。',
            children: [
              {
                name: '尚符玺郎中',
                count: 4,
                job: '原二名在宫中，主管皇帝之玺以及虎符、竹符的一半。',
              },
              {
                name: '符节令史',
                salary: '二百石',
                job: '负责刻写符节',
              },
            ],
          },
          {
            name: '御史中丞',
            salary: '千石',
            job:
              '即御史大夫的属丞。旧日别监御史设在宫殿中，秘密举发违法之事。待到御史大夫改称司空，而御史中丞分出留在宫中，成为御史台的统领，其后又改属少府。',
            children: [
              {
                name: '治书侍御史',
                salary: '六百石',
                count: 2,
                job:
                  '选用通晓法律者担任。凡各地上报有疑难的案件，负责根据法律判以应得之罪。',
              },
              {
                name: '侍御史',
                salary: '六百石',
                count: 15,
                job: `
                  1. 负责监察举发违法之事，接受公卿百官奏事，有过失则列举罪过进行弹劾。
                  2. 凡郊庙祭祀，盛大朝会、封王拜爵典礼，则侍御史二名负责监察威仪，有过失则检举弹劾。
                `,
                provenance: [
                  ['更始遣侍御史持节立光武为萧王', '后汉书·卷一光武本纪'],
                ],
              },
              {
                name: '兰台令史',
                salary: '六百石',
                job: '掌管奏疏及印工文书。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: '执金吾',
    salary: '中二千石',
    job:
      '掌管预防宫廷周围的意外事变和水火灾害。每月绕行宫廷之外三周，并主管兵器。执金吾之“吾”就是抵御的意思。',
    other:
      '原设有式道、左右中候三名，官秩六百石。皇帝出行，负责在车驾前清除道路，返回时持旌旗到达宫门，宫门才打开。东汉仅设一名，又不常设，每次皇帝出行，以郎官兼任式道候，事毕则免去此官，不再隶属于执金吾。又裁撤中垒、寺互、都船三部的令、丞、尉，以及左右京辅都尉。',
    children: [
      {
        name: '执金吾丞',
        salary: '比千石',
      },
      {
        name: '缇骑',
        count: 200,
        other: '与吏员食俸相同。',
      },
      {
        name: '武库令',
        salary: '六百石',
        job: '主管兵器',
        children: [
          {
            name: '武库丞',
          },
        ],
      },
    ],
  },
  {
    name: '太子太傅',
    salary: '中二千石',
    job: '职在辅导太子。以师礼相待，不设属官。',
  },
  {
    name: '大长秋',
    salary: '二千石',
    job:
      '汉初承秦制，称将行，由宦者担任。景帝时改为大长秋，有时以士人担任。东汉以后经常任用宦者，职责是传达皇后命令。凡皇后赏赐宗室，以及宗室晋见皇后，则负责通报。皇后出行则随行。',
    other:
      '汉承袭秦朝制度，设詹事一名，地位在大长秋之上，亦由宦者担任，主管中宫各官。成帝裁撤詹事，将其职能并入大长秋。此后皇后乘法驾出行时，则由中宫谒者、中宫宦者职吏临时兼任詹事导引车驾，事后罢任。诛杀宦者之后，由尚书选择兼职吏一名导引车驾。其中太皇太后的长信宫、皇太后的长乐宫，各设置少府一名，职守如同大长秋，少府及其他官吏都以宫名置于称号之首，其官员数目官秩位次与中宫相同。皇帝的祖母称长信宫，所以有长信少府，长乐少府，地位在大长秋之上，少府及职吏全部由宦者担任，官秩地位如同中宫。长乐宫又设置卫尉，长乐宫仆称太仆，官秩都是二千石，地位在少府之上。太皇太后、皇太后去世则裁撤其属官，不经常设置。',
    children: [
      {
        name: '大长秋丞',
        salary: '六百石',
        isEunuch: true,
      },
      {
        name: '中宫仆',
        salary: '千石',
        isEunuch: true,
        job: '负责驾车',
      },
      {
        name: '太仆',
        salary: '二千石',
        job: '东汉去“太”字，官秩减到千石，属大长秋。',
      },
      {
        name: '中宫谒者令',
        salary: '六百石',
        isEunuch: true,
        children: [
          {
            name: '中宫谒者',
            salary: '四百石',
            isEunuch: true,
            count: 3,
            job: '负责通报中宫章奏。',
          },
        ],
      },
      {
        name: '中宫尚书',
        salary: '六百石',
        isEunuch: true,
        count: 5,
        job: '主管中宫文书。',
      },
      {
        name: '中宫私府令',
        salary: '六百石',
        isEunuch: true,
        job: '主管中宫库藏的币帛等物，并管理裁制衣被缝补浣洗。',
        children: [
          {
            name: '中宫私府丞',
            isEunuch: true,
          },
        ],
      },
      {
        name: '中宫永巷令',
        salary: '六百石',
        isEunuch: true,
        job: '主管宫女',
        children: [
          {
            name: '中宫永巷丞',
            isEunuch: true,
          },
        ],
      },
      {
        name: '中宫黄门冗从仆射',
        salary: '六百石',
        isEunuch: true,
        job: '主管中宫黄门冗从',
      },
      {
        name: '中宫署令',
        salary: '六百石',
        isEunuch: true,
        job: '主管中宫提请天子居留的次数。',
        children: [
          {
            name: '中宫署丞',
            isEunuch: true,
          },
          {
            name: '复道丞',
            isEunuch: true,
            job: '主管中宫阁道。',
          },
          {
            name: '女骑', // ???
            count: 6,
          },
        ],
      },
      {
        name: '中宫药长',
        salary: '四百石',
        isEunuch: true,
      },
    ],
  },
  {
    name: '太子少傅',
    salary: '二千石',
    job: '亦以辅助劝导太子为职责，并主管全部太子属官。',
    other:
      '凡皇帝新即位，尚未立太子，则太子属官一律不设，唯独保留舍人，隶属于少府。',
    children: [
      {
        name: '太子率更令',
        salary: '千石',
        job: '负责安排太子庶子、太子舍人轮流职宿，职责如同光禄勋。',
      },
      {
        name: '太子庶子',
        salary: '四百石',
        count: true,
        job: '如同五官署、左署、右署三署中郎。',
      },
      {
        name: '太子舍人',
        salary: '二百石',
        count: true,
        job: '轮流职宿，如同五官署、左署、右署三署郎中。',
      },
      {
        name: '太子家令',
        salary: '千石',
        job: '主管粮食饮食。职责相似于大司农、少府。',
      },
      {
        name: '太子仓令',
        salary: '六百石',
        job: '主管仓库粮谷',
      },
      {
        name: '太子食官令',
        salary: '六百石',
        job: '主管饮食。', // 与太子家令相同???
      },
      {
        name: '太子仆',
        salary: '千石',
        job: '主管车马，职责如同太仆',
      },
      {
        name: '太子厩长',
        salary: '四百石',
        job: '主管车马',
      },
      {
        name: '太子门大夫',
        salary: '六百石',
        job:
          '《汉书注》说职责相当于郎将。原设左右户将，分别主管左右户直郎，光武帝建武年间撤销。',
      },
      {
        name: '太子中庶子',
        salary: '六百石',
        count: 5,
        job: '职如侍中',
      },
      {
        name: '太子洗马',
        salary: '比六百石',
        count: 16,
        job: '《汉书注》说职责如同谒者。太子出行，则轮值者在车马前导引仪仗。',
      },
      {
        name: '太子中盾',
        salary: '四百石',
        job: '负责在四周宿卫巡查',
      },
      {
        name: '太子卫率',
        salary: '四百石',
        job: '统领门卫士。',
      },
    ],
  },
  {
    name: '将作大匠',
    salary: '二千石',
    job:
      '汉承袭秦制，称作将作少府，景帝改为将作大匠。掌管修建宗庙、皇帝正宫、宫殿、陵园等土木工程，并在道路两侧种植桐、梓等树木。',
    children: [
      {
        name: '将作大匠丞',
        salary: '六百石',
      },
      {
        name: '左校令',
        salary: '六百石',
        job: '掌管左工徒。',
        children: [
          {
            name: '左校丞',
          },
        ],
      },
      {
        name: '右校令',
        salary: '六百石',
        job: '掌管右工徒。',
        children: [
          {
            name: '右校丞',
          },
        ],
      },
    ],
  },
  {
    name: '城门校尉',
    salary: '比二千石',
    job: '掌管洛阳城门十二所。',
    other:
      '洛阳城门十二座，其中正南一门称平城门，是北宫之门。属卫尉管辖。其余为上西门、雍门、广阳门、津门、小苑门、开阳门、牦门、中东门、上东门、谷门、夏门，共十二门。',
    children: [
      {
        name: '司马',
        salary: '千石',
        job: '主管兵器。每城门一人。',
      },
      {
        name: '门候',
        salary: '六百石',
        job: '每城门一人。',
      },
    ],
  },
  {
    name: '北军中候',
    salary: '六百石',
    job: '负责监督屯骑、越骑、步兵、长水、射声五营宿卫兵。',
    other:
      '原设有中垒校尉，统辖北军营垒之事。又有胡骑校尉、虎贲校尉，都是武帝设置。东汉裁中垒校尉，仅设北军中候，以监督五营。胡骑校尉并入长水校尉。虎贲校尉主管轻车，并入射声校尉。',
    children: [
      {
        name: '屯骑校尉',
        salary: '比二千石',
        job: '掌管宿卫兵。',
        children: [
          {
            name: '司马',
            salary: '千石',
          },
        ],
      },
      {
        name: '越骑校尉',
        salary: '比二千石',
        job: '掌管宿卫兵。',
        children: [
          {
            name: '司马',
            salary: '千石',
          },
        ],
      },
      {
        name: '步兵校尉',
        salary: '比二千石',
        job: '掌管宿卫兵。',
        children: [
          {
            name: '司马',
            salary: '千石',
          },
        ],
      },
      {
        name: '长水校尉',
        salary: '比二千石',
        job: '掌管宿卫兵。',
        children: [
          {
            name: '长水司马',
            salary: '千石',
          },
          {
            name: '胡骑司马',
            salary: '千石',
            job: '统辖乌桓骑兵。',
          },
        ],
      },
      {
        name: '射声校尉',
        salary: '比二千石',
        job: '掌管宿卫兵。',
        children: [
          {
            name: '司马',
            salary: '千石',
          },
        ],
      },
    ],
  },
  {
    name: '司隶校尉',
    salary: '比二千石',
    job:
      '汉武帝开始设置，持符节，负责纠察百官，以及京城和附近各郡的违法者。元帝时去除符节，成帝裁撤本官，建武年间重新设置，并监管一州。司隶校尉管辖七郡。',
    children: [
      // 从事史十二名
      {
        name: '都官从事',
        job: '负责纠察百官中的违法者',
      },
      {
        name: '功曹从事',
        job: '主管州内官员的选用及其他事务。',
      },
      {
        name: '别驾从事',
        job: '司隶校尉巡视辖区则在前引导，并总领各事。',
      },
      {
        name: '簿曹从事',
        job: '主管钱粮账簿。',
      },
      {
        name: '兵曹从事',
        job: '主管军事。',
      },
      {
        name: '郡国从事',
        salary: '百石',
        job: '每郡国各一名，负责监督文书，纠察非法者，都由各州自行选用。',
      },
      // 假佐二十五人
      {
        name: '主簿',
        job: '总管官府事务，省理文书档案。',
      },
      {
        name: '门亭长',
        job: '主管州政事',
      },
      {
        name: '门功曹书佐',
        job: '负责选拔任用属官',
      },
      {
        name: '《孝经》师',
        job: '负责监考孝经',
      },
      {
        name: '《月经》师',
        job: '负责按时节举行祭祀',
      },
      {
        name: '律令师',
        job: '负责刑法事务',
      },
      {
        name: '簿曹书佐',
        job: '主管文书档案',
      },
      {
        name: '典郡书佐',
        job:
          '每郡国各设一名典郡书佐，格子主管本郡文书，由郡吏补任，任期满一年后改任。',
      },
    ],
  },
  {
    name: '河南尹', // 河南与三辅 ???
    job: '主管京城，特准参加朝廷集会。',
  },
];

export default data;
