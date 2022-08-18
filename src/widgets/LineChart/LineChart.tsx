import React, { useState } from "react";
import {
  Plot,
  Line,
  XAxis,
  YAxis,
  minMax,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear } from "d3-scale";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data = Array(20)
    .fill({})
    .map((d, i) => ({
      x: i,
      y: Math.random() * 10,
    }));
  return data;
};

const LineChart = ({ id }: WidgetProps) => {
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
        <Line x="x" y="y">
          <Line.Dots display />
        </Line>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default LineChart;
