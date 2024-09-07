import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigatior from "./AppNavigatior";
import ExchangeRatesPage from "../screens/ExchangeRates";
import CalculatorPage from "../screens/Calculator";
import SettingPage from "../screens/Setting";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
const DrawerLayout = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Calculator"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color="black"
            onPress={() => navigation.openDrawer()}
            style={styles.icon}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="Calculator"
        options={{
          drawerLabelStyle: {
            fontFamily: "SUSE-SemiBold",
            fontSize: 16,
          },
        }}
        component={CalculatorPage}
      />
      <Drawer.Screen name="ExchangeRates" component={ExchangeRatesPage} />
      <Drawer.Screen name="Setting" component={SettingPage} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
});

export default DrawerLayout;
