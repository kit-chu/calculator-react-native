import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Create() {
  return (
    <View style={styles.container}>
      <Ionicons name="sunny" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  poppinsLight: {
    fontFamily: "SUSE-Bold",
    fontSize: 20,
  },
});
