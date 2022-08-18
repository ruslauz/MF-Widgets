import React, { useState } from "react";
import Button from "@semcore/button";
import { colors, Plot, Venn, ResponsiveContainer } from "@semcore/d3-chart";
import { Flex } from "@semcore/flex-box";
import Menu from "../../components/Menu";
import { WidgetProps } from "../types";

const getData = () => {
  const orders = [
    (val1: any, val2: any) => val2.radius - val1.radius,
    (val1: any, val2: any) => val1.radius - val2.radius,
  ];
  const orientations = [Math.PI / 2, Math.PI];
  return { orders, orientations };
};

const VennChartConfigurable = ({ id }: WidgetProps) => {
  const [{ orders, orientations }, setData] = useState(getData());
  const [[width, height], updateSize] = useState([0, 0]);
  const [orientation, changeOrientation] = useState(0);
  const [order, changeOrder] = useState(0);

  return (
    <ResponsiveContainer h={"80%"} onResize={updateSize}>
      <Flex alignItems="center" direction="column">
        <Plot height={height} width={width} data={data}>
          <Venn
            orientation={orientations[orientation]}
            orientationOrder={orders[order]}
          >
            <Venn.Circle dataKey="F" />
            <Venn.Circle dataKey="S" color={colors["blue-03"]} />
            <Venn.Intersection dataKey="F/S" />
          </Venn>
        </Plot>
        <Flex direction="row">
          <Button
            onClick={() => changeOrientation(Number(!orientation))}
            mr={2}
          >
            Change orientation
          </Button>
          <Button onClick={() => changeOrder(Number(!order))}>
            Change order
          </Button>
        </Flex>
      </Flex>
      <Menu id={id}></Menu>
    </ResponsiveContainer>
  );
};

const data = {
  F: 5,
  S: 7,
  "F/S": 3,
};

export default VennChartConfigurable;
