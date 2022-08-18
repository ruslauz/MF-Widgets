import React, { useState } from "react";
import {
  Plot,
  XAxis,
  YAxis,
  minMax,
  colors,
  StackedArea,
  HoverLine,
  Tooltip,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear } from "d3-scale";
import { Flex, Box } from "@semcore/flex-box";
import { Text } from "@semcore/typography";
import { curveCardinal } from "d3-shape";
import { formatDate } from "../../utils";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const date = new Date();
  const data = [...Array(5).keys()].map((d, i) => ({
    time: new Date(date.setDate(date.getDate() + 5)),
    stack1: Math.random() * 5,
    stack2: Math.random() * 5,
    stack3: Math.random() * 5,
  }));
  return data;
};

const Stacked = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());
  const [[width, height], updateSize] = useState([0, 0]);
  const MARGIN = 40;
  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain(minMax(data, "time"));
  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 15]);

  return (
    <ResponsiveContainer h={"100%"} onResize={updateSize}>
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
        <Tooltip tag={HoverLine} x="time" wMin={100}>
          {({ xIndex }) => {
            return {
              children: typeof xIndex === "number" && (
                <>
                  <Tooltip.Title>
                    {formatDate(data[xIndex].time, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Tooltip.Title>
                  <Flex justifyContent="space-between">
                    <Tooltip.Dot mr={4}>Stack 1</Tooltip.Dot>
                    <Text bold>{data[xIndex].stack1}</Text>
                  </Flex>
                  <Flex mt={2} justifyContent="space-between">
                    <Tooltip.Dot mr={4} color={colors["green-02"]}>
                      Stack 2
                    </Tooltip.Dot>
                    <Text bold>{data[xIndex].stack2}</Text>
                  </Flex>
                  <Flex mt={2} justifyContent="space-between">
                    <Tooltip.Dot mr={4} color={colors["orange-04"]}>
                      Stack 3
                    </Tooltip.Dot>
                    <Text bold>{data[xIndex].stack3}</Text>
                  </Flex>
                  <Flex mt={2} justifyContent="space-between">
                    <Box mr={4}>Total</Box>
                    <Text bold>
                      {data[xIndex].stack1 +
                        data[xIndex].stack2 +
                        data[xIndex].stack3}
                    </Text>
                  </Flex>
                </>
              ),
            };
          }}
        </Tooltip>
        <StackedArea x="time">
          <StackedArea.Area y="stack1" curve={curveCardinal}>
            <StackedArea.Area.Dots />
          </StackedArea.Area>
          <StackedArea.Area
            y="stack2"
            fill="#59DDAA50"
            color="#59DDAA"
            curve={curveCardinal}
          >
            <StackedArea.Area.Dots />
          </StackedArea.Area>
          <StackedArea.Area
            y="stack3"
            fill="#FF622D50"
            color="#FF622D"
            curve={curveCardinal}
          >
            <StackedArea.Area.Dots />
          </StackedArea.Area>
        </StackedArea>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

export default Stacked;
