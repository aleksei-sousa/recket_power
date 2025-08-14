import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameEngine } from "react-native-game-engine";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GameEngine style={{position: 'absolute', top: 0, left:0, bottom:0, right:0 }}></GameEngine>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}
