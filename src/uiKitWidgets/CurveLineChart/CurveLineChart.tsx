import React, { useState } from "react";
import {
  Plot,
  Line,
  XAxis,
  YAxis,
  HoverLine,
  Tooltip,
  minMax,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear } from "d3-scale";
import { Flex } from "@semcore/flex-box";
import { Text } from "@semcore/typography";
import { curveCardinal } from "d3-shape";
import { WidgetProps } from "../types";
import Menu from "../../components/Menu";

const getData = () => {
  const data = Array(20)
    .fill({})
    .map((d, i) => ({
      x: i,
      y: Math.random() * 10,
    }));

  return data;
};

const CurveLineChart = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());

  const [[width, height], updateSize] = useState([0, 0]);

  const MARGIN = 40;
  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain(minMax(data, "x"));
  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 10]);

  return (
    <ResponsiveContainer h={"100%"} onResize={updateSize}>
      <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>
        <YAxis>
          <YAxis.Ticks />
          <YAxis.Grid />
        </YAxis>
        <XAxis>
          <XAxis.Ticks />
        </XAxis>
        <Tooltip tag={HoverLine} x="x" wMin={100}>
          {({ xIndex }) => {
            return {
              children: typeof xIndex === "number" && (
                <>
                  <Tooltip.Title>{data[xIndex].x}</Tooltip.Title>
                  <Flex justifyContent="space-between">
                    <Tooltip.Dot mr={4}>Line</Tooltip.Dot>
                    <Text bold>{data[xIndex].y}</Text>
                  </Flex>
                </>
              ),
            };
          }}
        </Tooltip>
        <Line x="x" y="y" curve={curveCardinal}>
          <Line.Dots />
        </Line>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default CurveLineChart;
