import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import CalculatorPage from "../screens/Calculator";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, Icon } from "react-native";
import ThemeToggle from "../components/ThemeToggle";
import ExchangeRatesPage from "../screens/ExchangeRates";
const Stack = createStackNavigator();

export default function AppNavigatior({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={navigation}
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
        name="CalculatorPage"
        component={CalculatorPage}
        options={{
          title: "Calculator",
          headerTitleStyle: styles.suse_semi_bold,
        }}
      />
      <Stack.Screen
        name="ExchangeRatesPage"
        component={ExchangeRatesPage}
        options={{
          title: "Exchange Rates",
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
