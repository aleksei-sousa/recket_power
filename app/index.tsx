import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameEngine } from "react-native-game-engine";
import entities from '@/entities/index'
import Physics from '@/src/physics/physics'
import { useEffect, useState } from "react";

export default function Index() {

  const [running, setRunning] = useState(false)

  useEffect(()=>{
    setRunning(true)
  }, [])
  
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GameEngine style={{position: 'absolute', top: 0, left:0, bottom:0, right:0 }}
        entities={entities()}
        systems={[Physics]}
        running={running}
      >

        </GameEngine>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}
