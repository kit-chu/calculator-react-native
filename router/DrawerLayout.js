import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigatior from "./AppNavigatior";
const DrawerLayout = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={AppNavigatior}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;
