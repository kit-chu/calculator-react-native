import React from "react";
import { Text, View } from "react-native";

function ExchangeRates() {
  return (
    <View style={styles.container}>
      <Text>ExchangeRates</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
};

export default ExchangeRates;
