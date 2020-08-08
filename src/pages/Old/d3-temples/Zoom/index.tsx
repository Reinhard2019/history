import React, { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';

const width = 853;
const height = 500;

const radius = 6;
const step = radius * 2;
const theta = Math.PI * (3 - Math.sqrt(5));

const data: {
  x: number;
  y: number;
}[] = Array.from({ length: 2000 }, (_, i) => {
  const radius = step * Math.sqrt((i += 0.5));
  const a = theta * i;
  return {
    x: width / 2 + radius * Math.cos(a),
    y: height / 2 + radius * Math.sin(a),
  };
});

function zoomed(select: any, transform: any) {
  console.log(transform)
  select.attr('transform', transform);
}

const Zoom = () => {
  const svgRef = useRef(null);
  const gRef = useRef(null);
  useLayoutEffect(() => {
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);
    g.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', ({ x }: any) => x)
      .attr('cy', ({ y }: any) => y)
      .attr('fill', (_, i) => d3.interpolateRainbow(i / 360))
      .attr('r', radius);

    svg.call(
      d3
        .zoom()
        // .extent([
        //   [0, 0],
        //   [width, height],
        // ])
        .scaleExtent([1, 8])
        .on('zoom', ({ transform }) => zoomed(g, transform)),
    );
  });

  return (
    <svg ref={svgRef} viewBox={`0, 0, ${width}, ${height}`}>
      <g ref={gRef} />
    </svg>
  );
};

export default Zoom;
