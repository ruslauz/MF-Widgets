import React, { useState } from "react";
import {
  Plot,
  Bubble,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear } from "d3-scale";
import { Text } from "@semcore/typography";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const data = Array(10)
  .fill({})
  .map((d, i) => ({
    x: Math.random() * 10,
    y: Math.random() * 10,
    value: Math.random() * 1000,
  }));

const getData = () => {
  const data = Array(10)
    .fill({})
    .map((d, i) => ({
      x: Math.random() * 10,
      y: Math.random() * 10,
      value: Math.random() * 1000,
    }));

  return data;
};

const BubbleChart = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());

  const [[width, height], updateSize] = useState([0, 0]);
  const MARGIN = 40;
  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain([0, 10]);
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
        <Bubble x="x" y="y" value="value" />
        <Tooltip>
          {({ xIndex }) => {
            return {
              children: typeof xIndex === "number" && (
                <>
                  <Tooltip.Title>Data</Tooltip.Title>
                  <Text tag="div">X axis {data[xIndex].x}</Text>
                  <Text tag="div">Y axis {data[xIndex].y}</Text>
                  <Text tag="div">Value {data[xIndex].value}</Text>
                </>
              ),
            };
          }}
        </Tooltip>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default BubbleChart;
