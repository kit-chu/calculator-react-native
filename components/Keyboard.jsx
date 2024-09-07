import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconVertor from "@expo/vector-icons";
import {
  Feather,
  FontAwesome6,
  Entypo,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

// Define your ButtonCalculator component
const ButtonCalculator = ({ label, type, color, name, typeIcon, onPress }) => {
  let content;

  switch (type) {
    case "Ionicons":
      content = <Ionicons name={label} size={24} color="black" />;
      break;
    case "Image":
      content = <Image source={part} style={{ width: 24, height: 24 }} />;
      break;
    case "IconVector":
      content = React.createElement(typeIcon, {
        name: name,
        size: 24,
        color: color || "#313136",
      });
      break;
    default:
      content = (
        <Text style={[styles.tx_click_active, { color: color || "#313136" }]}>
          {label}
        </Text>
      );
  }

  return (
    <TouchableOpacity style={styles.bt_click_active} onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
};

// Define your main Keyboard component
export default function Keyboard({ onKeyPress }) {
  const data = manageValue().reverse();
  const data2 = manageValue2();
  const data3 = manageValue3();
  const data4 = manageValue4();

  return (
    <View style={styles.container}>
      <View style={styles.container_life}>
        <View style={styles.container_3}>
          {data3.map((item) => (
            <View key={item.id} style={styles.column}>
              <ButtonCalculator
                label={item.label}
                type={item.type}
                color={item.color}
                name={item.name}
                typeIcon={item.typeIcon}
                onPress={() => onKeyPress(item.label)}
              />
            </View>
          ))}
        </View>
        <View style={styles.container_1}>
          {data.map((item) => (
            <View key={item.id} style={styles.column}>
              <ButtonCalculator
                label={item.label}
                onPress={() => onKeyPress(item.label)}
              />
            </View>
          ))}
        </View>
        <View style={styles.container_2}>
          {data2.map((item) => (
            <View key={item.id} style={styles.column}>
              <ButtonCalculator
                label={item.label}
                type={item.type}
                typeIcon={item.typeIcon}
                name={item.name}
                onPress={() => onKeyPress(item.label)}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.container_right}>
        <View style={styles.container_4}>
          {data4.map((item) => (
            <View key={item.id} style={styles.column}>
              <ButtonCalculator
                label={item.label}
                type={item.type}
                name={item.name}
                typeIcon={item.typeIcon}
                color={item.color}
                onPress={() => onKeyPress(item.label)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// Manage value functions
const manageValue = () => {
  return [
    { id: 1, label: "3" },
    { id: 2, label: "2" },
    { id: 3, label: "1" },
    { id: 4, label: "6" },
    { id: 5, label: "5" },
    { id: 6, label: "4" },
    { id: 7, label: "9" },
    { id: 8, label: "8" },
    { id: 9, label: "7" },
  ];
};

const manageValue2 = () => {
  return [
    {
      id: 10,
      label: "reload1",
      name: "reload1",
      type: "IconVector",
      typeIcon: AntDesign,
    },
    { id: 11, label: "0" },
    { id: 12, label: "." },
  ];
};

const manageValue3 = () => {
  return [
    {
      id: 13,
      label: "AC",
      type: "",
      color: "#F2361C",
      onPress: () => onKeyPress("delete"),
    },
    {
      id: 14,
      label: "plus-minus",
      type: "IconVector",
      color: "#F2361C",
      name: "plus-minus",
      typeIcon: FontAwesome6,
    },
    { id: 15, label: "%", type: "", color: "#F2361C" },
  ];
};

const manageValue4 = () => {
  return [
    {
      id: 16,
      label: "divide",
      type: "IconVector",
      name: "divide",
      typeIcon: Feather,
      color: "#FBA936",
    },
    {
      id: 17,
      label: "multiply",
      type: "IconVector",
      name: "cross",
      color: "#FBA936",
      typeIcon: Entypo,
    },
    {
      id: 18,
      label: "delete",
      type: "IconVector",
      name: "dash",
      typeIcon: Octicons,
      color: "#FBA936",
    },
    {
      id: 19,
      label: "plus",
      type: "IconVector",
      name: "plus",
      typeIcon: Entypo,
      color: "#FBA936",
    },
    {
      id: 20,
      label: "equal",
      type: "IconVector",
      name: "equals",
      typeIcon: FontAwesome6,
      color: "#FBA936",
    },
  ];
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
    position: "relative",
  },
  container_life: {
    flex: 3,
    justifyContent: "flex-end",
    height: "100%",
    paddingBottom: 8,
  },
  container_right: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  container_1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  container_2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  container_3: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  container_4: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  bt_click_active: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  tx_click_active: {
    fontSize: 26,
    color: "#313136",
    fontFamily: "SUSE-Medium",
  },
  image: {
    width: 40,
    height: 40,
  },
  column: {
    width: "28%",
  },
});
