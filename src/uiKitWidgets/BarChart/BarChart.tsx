import React, { useState } from "react";
import {
  Plot,
  Bar,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear, scaleBand } from "d3-scale";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data = Array(5)
    .fill({})
    .map((d, i) => ({
      category: `Category ${i}`,
      bar: Math.random() * 10,
    }));

  return data;
};

const BarChart = ({ id }: WidgetProps) => {
  const [data, setData] = useState<
    {
      category: string;
      bar: number;
    }[]
  >(getData());
  const [[width, height], updateSize] = useState([0, 0]);

  const MARGIN = 40;
  const xScale = scaleBand()
    .range([MARGIN, width - MARGIN])
    .domain(data.map((d) => d.category))
    .paddingInner(0.4)
    .paddingOuter(0.2);
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
        <Bar x="category" y="bar" />
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default BarChart;
