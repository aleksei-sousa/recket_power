import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

function ActionButtons({ onA, onB }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onA}>
        <Text style={styles.label}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onB}>
        <Text style={styles.label}>B</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 50,
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ActionButtons;
