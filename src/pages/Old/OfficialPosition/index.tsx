import React, { useState } from 'react';
import { Table, Input } from 'antd';
// import Table, { ColumnProps } from 'antd/lib/table';
import data from '../data/officialPosition/houhanshu.json';
import { Popover, Button } from 'antd';
import Timeline from '../components/Timeline';
import CWCalendarTranslate, {
  ChineseCalendarDate,
} from '@reinhard2019/cw-calendar-translate';
import { trimMultiLine } from '../utils/string';
import { getDate } from '../utils/date';
import { ColumnProps } from 'antd/lib/table';
import memoizeOne from 'memoize-one';
import Paragraph from '../components/Paragraph';

const { Search } = Input;

export interface OfficialPositionT {
  name: string;
  alias?: string; // 官职的笼统的称呼，如三公、九卿
  ribbon?: string; // 印绶
  salary?: string; // 秩禄
  jobTypes?: string[]; // 职权的分类
  job?: string; // 职掌
  dataRange?: {
    name: string;
    startTime: ChineseCalendarDate;
    endTime?: ChineseCalendarDate;
  }[];
  isMilitary?: boolean; // 是否武职
  isEunuch?: boolean; // 是否由宦者担任
  remark?: string; // 备考
  count?: number | boolean; // true 表示无定员
  other?: string;
  subordinates?: string; // 属官详情
  experience?: string; // 官职变动经历
  children?: OfficialPositionT[];
  provenance?: [string, string?][]; // 出处
}

const endDayStr = '0001-02-11'; // 汉平帝元始元年1月1号对应的公历日期，可以此倒推之前的公历日期

const filterDataSource = memoizeOne(
  function filterDataSourceInner(data: OfficialPositionT[], search: string) {
    const result: OfficialPositionT[] = [];
    (data || []).forEach((item) => {
      let isMatch = item.name.includes(search);
      if (isMatch) {
        result.push(item);
        return;
      }

      const children = filterDataSourceInner(item.children, search);
      if (children.length > 0) {
        result.push({
          ...item,
          children,
        });
      }
    });
    return result;
  },
);

const OfficialPosition = () => {
  const [search, setSearch] = useState('');
  const columns: ColumnProps<OfficialPositionT>[] = [
    {
      title: '官职',
      key: 'name',
      width: 150,
      render(_, record) {
        if (!record.dataRange) {
          return record.name;
        }

        const dataRange = record.dataRange.map((item) => {
          const startTimeStr = CWCalendarTranslate.getWesternCalendarDate(
            item.startTime,
          );
          const startTime = getDate(startTimeStr);

          const endTimeStr = item.endTime
            ? CWCalendarTranslate.getWesternCalendarDate(item.endTime)
            : endDayStr;
          const endTime = getDate(endTimeStr);

          return {
            ...item,
            startTime,
            endTime,
          };
        });
        const content = <Timeline data={dataRange} width={1000} height={300} />;
        return (
          <Popover content={content} trigger="click" placement="bottomLeft">
            <Button type="link" style={{ padding: 0, height: 'inherit' }}>
              {record.name}
            </Button>
          </Popover>
        );
      },
    },
    {
      title: '称谓',
      key: 'alias',
      width: 100,
      render(_, record) {
        return record.alias;
      },
    },
    {
      title: '印绶',
      dataIndex: 'ribbon',
      width: 100,
    },
    {
      title: '秩禄',
      dataIndex: 'salary',
      width: 100,
    },
    {
      title: '人数',
      key: 'count',
      width: 50,
      render(_, record) {
        if (record.count === true) {
          return '无定员';
        }
        return record.count;
      },
    },
    {
      title: '职掌',
      key: 'job',
      width: 500,
      render(_, record) {
        return <pre>{trimMultiLine(record.job)}</pre>;
      },
    },
    {
      title: '是否武职',
      key: 'isMilitary',
      width: 100,
      render(_, record) {
        return record.isMilitary && '是';
      },
    },
    {
      title: '由宦者担任',
      key: 'isEunuch',
      width: 100,
      render(_, record) {
        return record.isEunuch && '是';
      },
    },
    {
      title: '属官详情',
      key: 'subordinates',
      width: 100,
      render(_, record) {
        return <Paragraph>{record.subordinates}</Paragraph>;
      },
    },
    {
      title: '官职变动经历',
      key: 'experience',
      width: 100,
      render(_, record) {
        return <Paragraph>{record.experience}</Paragraph>;
      },
    },
    {
      title: '其他',
      key: 'desc',
      width: 100,
      render(_, record) {
        return <Paragraph>{trimMultiLine(record.other)}</Paragraph>;
      },
    },
    {
      title: '备考',
      dataIndex: 'remark',
      width: 100,
    },
  ];

  return (
    <>
      <Search
        placeholder="请输入官职名"
        onSearch={setSearch}
        enterButton
        style={{
          display: 'block',
          width: 400,
          margin: 'auto',
          marginBottom: 10,
        }}
      />

      <Table
        rowKey="name"
        size="small"
        columns={columns}
        dataSource={filterDataSource(data, search)}
        pagination={false}
        scroll={{ y: 'calc(100vh - 160px)' }}
      />
    </>
  );
};

export default OfficialPosition;
