import React, { useState } from 'react';
import CWCalendarTranslate from '@reinhard2019/cw-calendar-translate';
import lodash from 'lodash';
import { RetweetOutlined } from '@ant-design/icons';
import { Chronology } from '../../types';
import { Cascader } from 'antd';
import { CascaderOptionType } from 'antd/lib/cascader';

const { chronology, getWesternCalendarDate } = CWCalendarTranslate;

function chronologyCascaderTranslate(
  chronology: Chronology[],
): CascaderOptionType[] {
  const result: CascaderOptionType[] = [];
  chronology.forEach((item) => {
    const lastValue = result[result.length - 1];
    if (lastValue && lastValue.label === item.emperor) {
      lastValue.children.push(item);
    } else {
      result.push({
        label: item.emperor,
        value: item.emperor,
        children: [item],
      });
    }
  });
  result.forEach((item) => {
    const children: CascaderOptionType[] = [];
    item.children.forEach((child) => {
      const lastValue = children[children.length - 1];
      const chineseEraName = child.chineseEraName || child.emperor;
      if (lastValue && lastValue.label === chineseEraName) {
        lastValue.children.push(child);
      } else {
        children.push({
          label: chineseEraName,
          value: chineseEraName,
          children: [child],
        });
      }
    });
    item.children = children;
  });
  const chineseEraNameList: CascaderOptionType[] = lodash.flatten(
    result.map((item) => item.children),
  );
  chineseEraNameList.forEach((item) => {
    item.children = item.children.map((child) => ({
      label: child.annal + '年',
      value: child.annal,
      children: child.months.map((month: any) => ({
        label:
          month.month > 0 ? month.month + '月' : `闰${Math.abs(month.month)}月`,
        value: month.month,
        children: Array(month.days)
          .fill(1)
          .map((_, i) => ({
            label: i + 1 + '日',
            value: i + 1,
          })),
      })),
    }));
  });
  return result;
}

const CalendarTranslate = () => {
  const [result, setResult] = useState('');

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <div>{result}</div>
      <div>
        <RetweetOutlined />
      </div>
      <Cascader
        options={chronologyCascaderTranslate(chronology)}
        onChange={(value) => setResult(getWesternCalendarDate(value))}
        placeholder="请选择"
        style={{ width: 300 }}
        allowClear={false}
      />
    </div>
  );
};

export default CalendarTranslate;
