import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Keyboard from "../components/Keyboard";
export default function Create() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.Text}>Section 1</Text>
      </View>
      <View style={styles.section2}>
        <Keyboard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FAFAFA",
  },

  section1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  section2: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Text: {
    fontFamily: "SUSE-Bold",
    fontSize: 20,
  },
});
