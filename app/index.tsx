import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameEngine } from "react-native-game-engine";
import { useEffect, useState, useRef } from "react";
import Matter from "matter-js";

import entities from "@/entities/index";
import Physics from "@/src/physics/physics";
import JoystickVertical from "@/components/Input"; // import

export default function Index() {
  const [running, setRunning] = useState(false);

  // 🔑 Usa useRef para manter as entidades persistentes
  const entitiesRef = useRef(entities());

  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GameEngine
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        entities={entitiesRef.current} // sempre a mesma instância
        systems={[Physics]}
        running={running}
      />

      <JoystickVertical
        style={{ position: "absolute", top: 50, left: 50 }}
        onMove={(value) => {
          const bird = entitiesRef.current.Bird?.body;
          if (!bird) return console.log("bird não existe");

          const speed = 5; // ajusta a sensibilidade
          console.log("move1", value);

          Matter.Body.setVelocity(bird, {
            x: 0,
            y: value * speed, // sobe/desce
          });
        }}
        onRelease={() => {
          const bird = entitiesRef.current.Bird?.body;
          if (!bird) return console.log("bird não existe");

          console.log("move2");
          Matter.Body.setVelocity(bird, { x: 0, y: 0 });
        }}
      />

      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
