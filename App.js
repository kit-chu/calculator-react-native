import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppNavigatior from "./router/AppNavigatior";
import React, { useState, useEffect } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "SUSE-Regular": require("./assets/fonts/SUSE-Regular.ttf"),
        "SUSE-Bold": require("./assets/fonts/SUSE-Bold.ttf"),
        "SUSE-ExtraBold": require("./assets/fonts/SUSE-ExtraBold.ttf"),
        "SUSE-ExtraLight": require("./assets/fonts/SUSE-ExtraLight.ttf"),
        "SUSE-Light": require("./assets/fonts/SUSE-Light.ttf"),
        "SUSE-Medium": require("./assets/fonts/SUSE-Medium.ttf"),
        "Fuzzy Bubbles Bold": require("./assets/fonts/Fuzzy Bubbles Bold.ttf"),
        "SUSE-Thin": require("./assets/fonts/SUSE-Thin.ttf"),
        "SUSE-SemiBold": require("./assets/fonts/SUSE-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // หรือหน้าโหลดชั่วคราว
  }

  return <AppNavigatior />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
