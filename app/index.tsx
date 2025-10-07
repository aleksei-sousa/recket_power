import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import entities from "@/entities/index";
import JoystickVertical from "@/components/Input";
import ActionButtons from "@/components/ActionButtons";

export default function Index() {
  const [running, setRunning] = useState(false);
  const entitiesRef = useRef(entities());
  const joystickValue = useRef(0); // valor atual do joystick

  useEffect(() => {
    setRunning(true);
  }, []);

  // Physics system
  const Physics = (entities, { time }) => {
    const bird = entities.Bird?.body;
    if (bird) {
      const speed = 0.012;
      Matter.Body.applyForce(bird, bird.position, {
        x: 0,
        y: joystickValue.current * speed,
      });
      Matter.Body.set(bird, {
  frictionAir: 0.2 // quanto maior, mais rápido ele para
});
    }

    Matter.Engine.update(entities.physics.engine, time.delta);
    return entities;
  };

  return (
    <View style={{ flex: 1 }}>
      <GameEngine
        style={{ flex: 1 }}
        entities={entitiesRef.current}
        systems={[Physics]}
        running={running}
      />

      <JoystickVertical
        style={{ position: "absolute", top: 50, left: 50 }}
        onMove={(value) => {
          joystickValue.current = value; // atualiza valor do joystick
        }}
        onRelease={() => {
          joystickValue.current = 0; // zera ao soltar
        }}
      />
      {/* <ActionButtons
        onA={() => console.log("Botão A")}
        onB={() => console.log("Botão B")}
      /> */}

    </View>
  );
}
