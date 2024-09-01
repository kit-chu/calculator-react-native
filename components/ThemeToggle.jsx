import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const ThemeToggle = () => {
  const [selectedIcon, setSelectedIcon] = useState("sunny");

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setSelectedIcon("sunny")}>
          <Ionicons
            name="sunny"
            size={18}
            color={selectedIcon === "sunny" ? "#313136" : "#D0D0D0"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedIcon("moon-outline")}>
          <Ionicons
            name="moon-outline"
            size={18}
            color={selectedIcon === "moon-outline" ? "#313136" : "#D0D0D0"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    width: 100,
    height: 42,
    margin: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    height: 42,
  },
  icon: {
    fontSize: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
  imgSVG: {},
});

export default ThemeToggle;
