import React, { useState } from "react";
import {
  Plot,
  GroupBar,
  YAxis,
  XAxis,
  HoverRect,
  Tooltip,
  colors,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear, scaleBand } from "d3-scale";
import { Flex } from "@semcore/flex-box";
import { Text } from "@semcore/typography";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data = Array(5)
    .fill({})
    .map((d, i) => ({
      category: `Category ${i}`,
      bar1: Math.random() * 10,
      bar2: Math.random() * 10,
    }));

  return data;
};

const GroupBarChart = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());
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
        <Tooltip tag={HoverRect} x="category" wMin={100}>
          {({ xIndex }) => ({
            children: typeof xIndex === "number" && (
              <>
                <Tooltip.Title>{data[xIndex].category}</Tooltip.Title>
                <Flex justifyContent="space-between">
                  <Tooltip.Dot mr={4}>Bar 1</Tooltip.Dot>
                  <Text bold>{data[xIndex].bar1}</Text>
                </Flex>
                <Flex mt={2} justifyContent="space-between">
                  <Tooltip.Dot mr={4} color={colors["green-02"]}>
                    Bar 2
                  </Tooltip.Dot>
                  <Text bold>{data[xIndex].bar2}</Text>
                </Flex>
              </>
            ),
          })}
        </Tooltip>
        <GroupBar x="category">
          <GroupBar.Bar y="bar1" />
          <GroupBar.Bar y="bar2" color={colors["green-02"]} />
        </GroupBar>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default GroupBarChart;
