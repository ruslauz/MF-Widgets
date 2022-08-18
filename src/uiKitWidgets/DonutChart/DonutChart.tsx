import React, { useState } from "react";
import {
  Donut,
  Plot,
  Tooltip,
  colors,
  ResponsiveContainer,
} from "@semcore/d3-chart";
import { Flex } from "@semcore/flex-box";
import { Text } from "@semcore/typography";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const data: Record<string, number> = {
    a: Math.random() * 10,
    b: Math.random() * 10,
    c: Math.random() * 10,
  };

  return data;
};

const DonutChart = ({ id }: WidgetProps) => {
  const [data, setData] = useState(getData());
  const [[width, height], updateSize] = useState([0, 0]);

  return (
    <ResponsiveContainer h={"100%"} onResize={updateSize}>
      <Plot width={width} height={height} data={data}>
        <Donut innerRadius={100}>
          <Donut.Pie dataKey="a" name="Pie 1" />
          <Donut.Pie dataKey="b" color={colors["green-02"]} name="Pie 2" />
          <Donut.Pie dataKey="c" color={colors["violet-04"]} name="Pie 3" />
          <Donut.Label>Example</Donut.Label>
        </Donut>
        <Tooltip>
          {({ dataKey, name }) => {
            return {
              children: typeof dataKey === "string" && (
                <>
                  <Tooltip.Title>{name}</Tooltip.Title>
                  <Flex justifyContent="space-between">
                    <Text bold>{data[dataKey]}</Text>
                  </Flex>
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

export default DonutChart;
