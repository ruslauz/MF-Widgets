import React, { useState } from "react";
import {
  Plot,
  StackBar,
  YAxis,
  XAxis,
  HoverRect,
  Tooltip,
  colors,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { scaleLinear, scaleBand } from "d3-scale";
import { Box, Flex } from "@semcore/flex-box";
import { Text } from "@semcore/typography";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data = [...Array(5).keys()].map((d, i) => ({
    category: `Category ${i}`,
    stack1: Math.random() * 10,
    stack2: Math.random() * 10,
  }));
  return data;
};

const StackedBarChart = ({ id }: WidgetProps) => {
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
    .domain([0, 20]);

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
          {({ xIndex }) => {
            return {
              children: typeof xIndex === "number" && (
                <>
                  <Tooltip.Title>{data[xIndex].category}</Tooltip.Title>
                  <Flex justifyContent="space-between">
                    <Tooltip.Dot mr={4}>Stack 1</Tooltip.Dot>
                    <Text bold>{data[xIndex].stack1}</Text>
                  </Flex>
                  <Flex mt={2} justifyContent="space-between">
                    <Tooltip.Dot mr={4} color={colors["blue-02"]}>
                      Stack 2
                    </Tooltip.Dot>
                    <Text bold>{data[xIndex].stack2}</Text>
                  </Flex>
                  <Flex mt={2} justifyContent="space-between">
                    <Box mr={4}>Total</Box>
                    <Text bold>
                      {data[xIndex].stack1 + data[xIndex].stack2}
                    </Text>
                  </Flex>
                </>
              ),
            };
          }}
        </Tooltip>
        <StackBar x="category">
          <StackBar.Bar y="stack1" />
          <StackBar.Bar y="stack2" color={colors["blue-02"]} />
        </StackBar>
      </Plot>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};
export default StackedBarChart;
