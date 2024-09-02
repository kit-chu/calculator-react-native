import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Calculator from "../screens/Calculator";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, Icon } from "react-native";
import ThemeToggle from "../components/ThemeToggle";

export default function AppNavigatior({ navigation }) {
  const Stack = createStackNavigator();
  // const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Calculator"
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            onPress={() => navigation.openDrawer()}
            style={styles.icon}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: "Calculator",
          headerTitleStyle: styles.suse_semi_bold,
        }}
      />
    </Stack.Navigator>
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
  icon: {
    marginHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
