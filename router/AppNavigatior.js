import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Calculator from "../screens/Calculator";
import { StyleSheet, Text, View, Button, Icon } from "react-native";
import ThemeToggle from "../components/ThemeToggle";

export default function AppNavigatior() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: "Calculator",
            headerTitleStyle: styles.suse_semi_bold,
            headerRight: () => <ThemeToggle />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  suse_semi_bold: {
    fontFamily: "SUSE-SemiBold",
    fontSize: 16,
  },
});
