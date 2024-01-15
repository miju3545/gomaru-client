import { useEffect, useMemo, useRef } from 'react';
import { css, useTheme } from '@emotion/react';
import * as d3 from 'd3';
import styled from '@emotion/styled';

const MARGIN = { top: 30, right: 20, bottom: 50, left: 40 } as const;

type DataPoint = { x: number; y: number };
type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
  xTicks: number;
  yTicks: number;
};

export const LineChart = ({
  width,
  height,
  data,
  xTicks,
  yTicks,
}: LineChartProps) => {
  const theme = useTheme();

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([xMin || 0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Y axis
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([min || 0, max || 0])
      .range([boundsHeight, 24]);
  }, [data, height]);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale).ticks(xTicks);
    const yAxisGenerator = d3.axisLeft(yScale).ticks(yTicks);

    svgElement
      .append('g')
      .attr('transform', `translate(0,${boundsHeight})`)
      .attr('color', theme.colors.n[50])
      .call(xAxisGenerator)
      .style('color', theme.colors.n[50])
      .style('font-size', '13')
      .style('font-weight', '450');

    svgElement
      .append('g')
      .call(yAxisGenerator)
      .attr('color', theme.colors.n[50])
      .selectAll('text')
      .style('color', theme.colors.n[50])
      .style('font-size', '13')
      .style('font-weight', '450');

    // 공통
    // svgElement.selectAll('line').style('display', 'none');
    // svgElement.selectAll('path').style('display', 'none');
    svgElement
      .selectAll('.y-tick')
      .data((yAxisGenerator.scale() as any).ticks())
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('y1', (d) => yScale(d as d3.NumberValue))
      .attr('x2', boundsWidth)
      .attr('y2', (d) => yScale(d as d3.NumberValue))
      .style('stroke', theme.colors.n[15])
      .style('stroke-width', 1);
  }, [xScale, yScale, boundsHeight, xTicks, yTicks]);

  const lineBuilder = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const linePath = lineBuilder(data);

  if (!linePath) return null;
  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <path
            d={linePath}
            opacity={1}
            stroke={theme.colors.black}
            fill="none"
            strokeWidth={2}
          />
        </g>
        <Graph
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          className="test"
        />
      </svg>
    </div>
  );
};

const Graph = styled.g`
  ${() => css`
    line,
    path {
      display: none;
    }
  `}
`;
