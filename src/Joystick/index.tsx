import React from "react";
import { JoyStick } from "react-native-virtual-joystick";
import { runOnJS } from "react-native-reanimated";

export default function Joystick({ onMove, onRelease, style }) {
  const handleMove = (data) => {
    if (onMove) runOnJS(onMove)(data); // força execução no JS thread
  };

  const handleRelease = (data) => {
    if (onRelease) runOnJS(onRelease)(data);
  };

  return (
    <JoyStick
      wrapperColor="#808080"
      nippleColor="#D3D3D3"
      wrapperRadius={60}
      nippleRadius={20}
      borderWidth={5}
      onMove={handleMove}
      onTouchDown={handleMove} // opcional
      onTouchUp={handleRelease}
      style={style}
    />
  );
}
