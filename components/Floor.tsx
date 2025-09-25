import React from "react";
import { View } from "react-native";
import Matter from "matter-js";

const FloorRenderer = (props) => {
  const { body, color } = props;
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;

  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <View
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        backgroundColor: color || "brown",
      }}
    />
  );
};

export default function Floor(world, pos, size, color) {
  const floor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, label: "Floor" }
  );

  Matter.World.add(world, floor);

  return {
    body: floor,
    color,
    pos,
    renderer: <FloorRenderer />,
  };
}
