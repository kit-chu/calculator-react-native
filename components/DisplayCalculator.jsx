import React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

function DisplayCalculator({ display, onTextChange }) {
  const [texts, setText] = useState(display);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    setText(display);
  }, [display]);

  const handleTextChange = (text) => {
    setText(text);
    if (onTextChange) {
      onTextChange(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.tx_box1}>444+333</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          onChangeText={handleTextChange}
          value={texts}
          style={styles.tx_box2}
          keyboardType="numeric"
          scrollEnabled={true}
          multiline={false}
          editable={true}
          autoFocus={true}
          ref={inputRef}
        />
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
  },
  box1: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  box2: {
    flex: 2,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    alignItems: "center",
  },
  tx_box1: {
    color: "#9D9D9D",
    fontSize: 16,
    fontFamily: "SUSE-Medium",
  },
  tx_box2: {
    color: "#313136",
    fontSize: 46,
    fontFamily: "SUSE-SemiBold",
  },
});

export default DisplayCalculator;
