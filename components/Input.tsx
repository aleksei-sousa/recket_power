import React, { useRef } from "react";
import { View, PanResponder, StyleSheet } from "react-native";

export default function JoystickVertical({ onMove, onRelease, style }) {
  const activeFinger = useRef(null);
  const startY = useRef(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt) => {
      const { locationX, locationY, identifier } = evt.nativeEvent;
      // só ativa se o toque começou dentro da área do joystick
      if (locationX >= 0 && locationX <= 80 && locationY >= 0 && locationY <= 80) {
        activeFinger.current = identifier;
        startY.current = evt.nativeEvent.pageY;
        return true;
      }
      return false;
    },

    onPanResponderMove: (evt) => {
      const touch = evt.nativeEvent.touches.find(
        (t) => t.identifier === activeFinger.current
      );
      if (!touch) return;

      const dy = touch.pageY - startY.current;
      let value = dy / 50; // sensibilidade
      if (value > 1) value = 1;
      if (value < -1) value = -1;

      onMove && onMove(value);
    },

    onPanResponderRelease: (evt) => {
      if (evt.nativeEvent.identifier === activeFinger.current) {
        onRelease && onRelease();
        activeFinger.current = null;
      }
    },

    onPanResponderTerminate: () => {
      onRelease && onRelease();
      activeFinger.current = null;
    },
  });

  return (
    <View style={[styles.container, style]} {...panResponder.panHandlers}>
      <View style={styles.joystick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  joystick: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#888",
  },
});
