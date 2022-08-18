import React, { useState } from "react";
import {
  Plot,
  Bar,
  Line,
  HoverRect,
  HoverLine,
  YAxis,
  XAxis,
  minMax,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import resolveColor from "@semcore/utils/lib/color";
import { scaleLinear, scaleBand } from "d3-scale";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data = Array(10)
    .fill({})
    .map((d, i) => ({
      category: i,
      bar: Math.random() * i,
    }));
  return data;
};

const TrendLine = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());
  const [[width, height], updateSize] = useState([0, 0]);
  const MARGIN = 40;
  const xScale = scaleBand()
    .range([MARGIN, width - MARGIN])
    .domain(data.map((d) => String(d.category)))
    .paddingInner(0.4)
    .paddingOuter(0.2);
  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain(minMax(data, "bar"));

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
        <HoverLine x="category" />
        <HoverRect x="category" />
        <Bar x="category" y="bar" />
        <Line
          x="category"
          y="bar"
          color={resolveColor("wall")}
          style={{ strokeWidth: 3, strokeDasharray: 5 }}
        >
          <Line.Dots display />
        </Line>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default TrendLine;
