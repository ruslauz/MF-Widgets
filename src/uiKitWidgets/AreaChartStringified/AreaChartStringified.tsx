import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  Plot,
  XAxis,
  YAxis,
  minMax,
  Area,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear } from "d3-scale";
import { curveCardinal } from "d3-shape";

import Menu from "../../components/Menu";
import { formatDate } from "../../utils";
import { WidgetProps } from "../types";

const store = configureStore({
  reducer: {},
});

const getData = () => {
  const date = new Date();
  const data = Array(10)
    .fill({})
    .map(() => {
      return {
        time: new Date(date.setDate(date.getDate() + 7)),
        line: Math.random() * 10,
      };
    });

  return data;
};

const AreaChartStringified = ({ id }: WidgetProps) => {
  const [data, setData] = useState<{ time: Date; line: number }[]>(getData());
  const [[width, height], updateSize] = useState([400, 200]);
  const MARGIN = 40;
  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain(minMax(data, "time"));
  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 10]);

  const stringifiedWidget = ReactDOMServer.renderToString(
    <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>
      <YAxis>
        <YAxis.Ticks />
        <YAxis.Grid />
      </YAxis>
      <XAxis>
        <XAxis.Ticks ticks={data.map((d) => +d.time)}>
          {({ value }) => ({
            children: formatDate(value, {
              month: "short",
              day: "numeric",
            }),
          })}
        </XAxis.Ticks>
      </XAxis>
      <Area x="time" y="line" curve={curveCardinal}>
        <Area.Dots display />
      </Area>
    </Plot>
  );

  return (
    <>
      <ResponsiveContainer
        h={"100%"}
        onResize={updateSize}
        dangerouslySetInnerHTML={{ __html: stringifiedWidget }}
      />
      <Menu disablePortals id={id}></Menu>
    </>
  );
};

export default ReactDOMServer.renderToString(
  <Provider store={store}>
    <AreaChartStringified id={"AreaChartStringified"} />
  </Provider>
);
