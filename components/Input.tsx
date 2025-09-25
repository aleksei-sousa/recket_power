import React from "react";
import { View, PanResponder, StyleSheet } from "react-native";

/**
 * Joystick vertical simples
 * @param {function} onMove - Recebe um valor y entre -1 (cima) e 1 (baixo)
 * @param {function} onRelease - Chamado quando o dedo solta o joystick
 */
export default function JoystickVertical({ onMove, onRelease, style }) {
  let startY = 0;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: (evt, gestureState) => {
      startY = gestureState.y0;
    },

    onPanResponderMove: (evt, gestureState) => {
      const dy = gestureState.moveY - startY;
      let value = dy / 50; // sensibilidade
      if (value > 1) value = 1;
      if (value < -1) value = -1;
      onMove && onMove(value);
    },

    onPanResponderRelease: () => {
      onRelease && onRelease();
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
