import React, { useRef, useLayoutEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { Moment } from 'moment';
import moment from 'moment';
import { Tooltip } from 'antd';

interface DataItem {
  name: string;
  time: Moment;
}

interface TimelineProps {
  width?: number; // px
  height?: number; // px
  data: DataItem[];
}

const color = d3.scaleOrdinal().range(d3.schemeCategory10);
const axisTopH = 20;
const contentMarginTop = 10;
const contentH = 20;
const defaultWidth = 1000;
const defaultHeight = axisTopH + contentMarginTop + contentH;

const Timeline = (props: TimelineProps) => {
  const { width = defaultWidth, height = defaultHeight, data } = props;

  const [k, setK] = useState(1);
  const defaultXScaleLinearW = width;
  const xScaleLinearW = defaultXScaleLinearW * k;
  const xScaleLinear = useMemo<d3.ScaleTime<number, number>>(() => {
    return d3
      .scaleTime()
      .domain([
        d3.max(data, (d) => d.time.valueOf()) as number,
        d3.min(data, (d) => d.time.valueOf()) as number,
      ])
      .range([0, xScaleLinearW]);
  }, [k]);
  const axisTop = useMemo<
    d3.Axis<number | Date | { valueOf(): number }>
  >(() => {
    const formatDate = (d: any) => moment(d).format('y年MM月DD日');
    return d3
      .axisTop(xScaleLinear)
      .tickPadding(2)
      .tickFormat(formatDate)
      .ticks(10 * k);
  }, [k]);

  const ref = useRef(null);
  const containerRef = useRef(null);
  const axisTopWrapRef = useRef(null);

  useLayoutEffect(() => {
    const svg = d3.select(ref.current);
    const container = d3.select(containerRef.current);

    const zoom = d3
      .zoom()
      .translateExtent([
        [0, 0],
        [xScaleLinearW, height],
      ])
      .scaleExtent([1, Infinity])
      .on('zoom', ({ transform }) => {
        container.attr('transform', `translate(${transform.x},0)`);

        setK(transform.k);
      });
    svg.call(zoom);
  }, []);

  useLayoutEffect(() => {
    const axisTopWrap = d3.select(axisTopWrapRef.current);
    axisTopWrap.call(axisTop);
  }, [axisTop]);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      cursor="grab"
      style={{ display: 'block', margin: 'auto' }}
    >
      <g ref={containerRef}>
        <g ref={axisTopWrapRef} transform={`translate(0, ${axisTopH})`} />
        <g transform={`translate(0, ${axisTopH + contentMarginTop})`}>
          {data.map((item, i) => {
            // 一天的毫秒数
            const dayMsec = 86400000;
            const x = xScaleLinear(item.time.valueOf() + dayMsec);
            const w = xScaleLinear(item.time.valueOf()) - x;

            const title = (
              <>
                <div>{item.time.format('y年MM月DD日')}</div>
                <div>{item.name}</div>
              </>
            );

            return (
              <Tooltip key={i} title={title}>
                <g transform={`translate(${x},0)`}>
                  <rect
                    cursor="default"
                    // x={sx}
                    width={w}
                    height={contentH}
                    fill={color(String(i)) as string}
                  />
                  {/* <text>{item.time.format('y年MM月DD日')}：{item.name}</text> */}
                </g>
              </Tooltip>
            );
          })}
        </g>
      </g>
    </svg>
  );
};

export default Timeline;
