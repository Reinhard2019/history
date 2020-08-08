import React, { useRef, useLayoutEffect } from 'react';
import * as d3 from 'd3';

interface TimelineProps {
  width?: number; // px
  height?: number; // px
  data: {
    name: string;
    startTime: Date;
    endTime: Date;
  }[];
}

const Timeline = (props: TimelineProps) => {
  const { width = 1000, height = 1000 } = props;
  
  const ref = useRef(null);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const { data } = props;

    const margin = { top: 50, right: 50, bottom: 20, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const color = d3.scaleOrdinal().range(d3.schemeCategory10);
    const y = d3
      .scaleBand()
      .domain(d3.range(data.length) as any)
      .range([0, innerHeight])
      .padding(0.2);
    const x = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.startTime.getFullYear()) as number,
        d3.max(data, (d) => d.endTime.getFullYear()) as number,
      ])
      .range([0, innerWidth]);
    const getRect = function (this: any, d: any, i: number) {
      const el = d3.select(this);
      const sx = x(d.startTime.getFullYear());
      const w = x(d.endTime.getFullYear()) - sx;
      const isLabelRight = sx > innerWidth / 2 ? sx + w < innerWidth : sx - w > 0;
    
      el.append('rect')
        .attr('x', sx)
        .attr('height', y.bandwidth())
        .attr('width', w)
        .attr('fill', color(i as any) as any);
    
      el.append('text')
        .text(d.name)
        .attr('x', isLabelRight ? sx - 5 : sx + w + 5)
        .attr('y', 2.5)
        .attr('fill', 'black')
        .style('text-anchor', isLabelRight ? 'end' : 'start')
        .style('dominant-baseline', 'hanging');
    };
    const formatDate = (d: any) => (d < 0 ? `${-d}BC` : `${d}AD`);
    const axisTop = d3.axisTop(x).tickPadding(2).tickFormat(formatDate);
    const axisBottom = d3.axisBottom(x).tickPadding(2).tickFormat(formatDate);
    const createTooltip = function (el: any) {
      el.style('position', 'absolute')
        .style('pointer-events', 'none')
        .style('top', 0)
        .style('opacity', 0)
        .style('background', 'white')
        .style('border-radius', '5px')
        .style('box-shadow', '0 0 10px rgba(0,0,0,.25)')
        .style('padding', '10px')
        .style('line-height', '1.3')
        .style('font', '11px sans-serif');
    };
    const getTooltipContent = function (d: any) {
      return `<b>${d.name}</b>
      <br/>
      ${formatDate(d.startTime.getFullYear())} - ${formatDate(
        d.endTime.getFullYear(),
      )}
      `;
    };

    const svg = d3.select(ref.current);
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const tooltip = d3
      .select(tooltipRef.current)
      .call(createTooltip);

    const groups = g.selectAll('g').data(data).enter().append('g');
    groups.attr('transform', (_, i) => `translate(0, ${y(i as any)})`);
    groups
      .each(getRect)
      .on('mouseover', function (d) {
        // d3.select(this).select('rect').attr('fill', d.color.darker());

        tooltip.style('opacity', 1).html(getTooltipContent(d));
      })
      .on('mouseleave', function (d) {
        // d3.select(this).select('rect').attr('fill', d.color);
        tooltip.style('opacity', 0);
      });

    svg
      .append('g')
      .attr(
        'transform',
        (d, i) => `translate(${margin.left} ${margin.top - 10})`,
      )
      .call(axisTop);

    svg
      .append('g')
      .attr(
        'transform',
        (d, i) => `translate(${margin.left} ${height - margin.bottom})`,
      )
      .call(axisBottom);

    svg.on('mousemove', function (this: any, d) {
      let [x, y] = d3.mouse(this);

      tooltip.style('left', x + 'px').style('top', y + 'px');
    });
  }, []);

  return (
    <div style={{ position: 'relative', width, margin: 'auto' }}>
      <svg ref={ref} width={width} height={height} />
      <div ref={tooltipRef}></div>
    </div>
  );
};

export default Timeline;
