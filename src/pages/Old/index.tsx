import React from 'react';
import { Tabs } from 'antd';
// import CalendarTranslate from './CalendarTranslate/index';
import OfficialPosition from './OfficialPosition';
// import Population from './Population';
import CWCalendarTranslate from '@reinhard2019/cw-calendar-translate';
import PosthumousName from './PosthumousName/index';
import Timeline1 from './Timeline';
import Timeline2 from './components/Timeline2';
import Timeline3 from './components/Timeline';
import Zoom from './d3-temples/Zoom';
import PrimeMinisterData from './data/primeMinister.json';
import data from './data/houhanshu/timeline.json';
import styles from './index.module.scss';

const newData = data
  .filter((item) => {
    if (!item.time) {
      return false;
    }
    const firstTime = item.time[0];
    if (Array.isArray(firstTime)) {
      return false;
    }

    return CWCalendarTranslate.getWesternCalendarDate2(item.time as any);
  })
  .map((item) => ({
    time: CWCalendarTranslate.getWesternCalendarDate2(item.time as any),
    name: item.incident,
  }));

function App() {
  return (
    <div className="App">
      <Tabs className={styles.tabs} defaultActiveKey="indentedTree">
        {/* <Tabs.TabPane tab="中西历转换" key="calendarTranslate">
          <CalendarTranslate />
        </Tabs.TabPane> */}
        <Tabs.TabPane tab="谥号" key="posthumousName">
          <PosthumousName />
        </Tabs.TabPane>
        <Tabs.TabPane tab="秦汉官制" key="indentedTree">
          <OfficialPosition />
        </Tabs.TabPane>
        <Tabs.TabPane tab="东汉年表" key="timeline">
          <Timeline1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="东汉年表2" key="timeline2">
          <Timeline2 data={newData} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="丞相表" key="primeMinister">
          <Timeline3 data={PrimeMinisterData} />
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="西汉人口" key="population">
          <Population />
        </Tabs.TabPane> */}
        <Tabs.TabPane tab="Zoom" key="Zoom">
          <Zoom />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
