import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Keyboard from "../components/Keyboard";
import DisplayCalculator from "../components/DisplayCalculator";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Create() {
  const [inputText, setInputText] = useState("0");
  const [resultText, setResultText] = useState("");

  const handleKeyPress = (key) => {
    setInputText((prevText) => {
      if (prevText === "Error") {
        if (key === "AC" || key === "reload1") {
          setResultText("");
          return "0";
        }
        return key;
      }

      switch (key) {
        case "AC":
          setResultText("");
          return "0";
        case "reload1":
          return prevText.slice(0, -1);
        case "divide":
          return prevText + "÷";
        case "multiply":
          return prevText + "×";
        case "plus-minus":
          if (prevText === "0") {
            return "-0";
          } else if (prevText === "-0") {
            return prevText;
          } else if (/^-?\d+(\.\d+)?$/.test(prevText)) {
            return prevText.startsWith("-")
              ? prevText.slice(1)
              : "-" + prevText;
          }
          return prevText;
        case "plus":
          return prevText + "+";
        case "delete":
          if (/[\d÷×+\-]$/.test(prevText) || prevText === "") {
            return prevText;
          }
          return (
            prevText + (key === "delete" ? "-" : key === "plus" ? "+" : "")
          );
        case "%":
          // แปลงข้อความที่มี % เป็นรูปแบบที่ mathjs สามารถเข้าใจได้
          if (prevText === "" || prevText.endsWith(" ")) return prevText; // ไม่ทำอะไรหากไม่มีตัวเลขก่อนเปอร์เซ็นต์

          // ตรวจสอบและแทนที่เปอร์เซ็นต์ในข้อความ
          const percentExpr = prevText.replace(
            /(\d+(\.\d+)?)(%)(\d+(\.\d+)?)/g,
            (match, p1, p2, p3, p4, p5) => `(${p1} * (${p4} / 100))`
          );
          return prevText.includes("%")
            ? String(evaluate(percentExpr))
            : prevText + " %";
        case "equal":
          if (!prevText || prevText === "0") return "0"; // Check if prevText is empty or zero
          try {
            // Replace multiplication and division symbols for evaluation
            const formattedText = prevText.replace("×", "*").replace("÷", "/");
            // Replace percentages in the calculation
            const percentFormattedText = formattedText.replace(
              /(\d+(\.\d+)?)(%)(\d+(\.\d+)?)/g,
              (match, p1, p2, p3, p4, p5) => `(${p1} * (${p4} / 100))`
            );
            const result = evaluate(percentFormattedText);
            setResultText(String(result));
            return prevText;
          } catch {
            setResultText("Error");
            return "Error";
          }
        default:
          if (prevText === "-0" && key !== "0" && key !== ".") {
            // ถ้า prevText เป็น -0 และมีการพิมพ์ตัวเลขที่ไม่ใช่ 0 หรือจุดทศนิยม
            // แทนที่ด้วย - และตัวเลขที่พิมพ์
            return "-" + key;
          }
          if (prevText === "0" || prevText === "") {
            return key; // Replace initial "0" or empty with the first number
          }
          return prevText + key;
      }
    });
  };

  const handleTextChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <DisplayCalculator
          display={inputText}
          onPress={handleTextChange}
          result={resultText}
        />
      </View>
      <View style={styles.section2}>
        <Keyboard onKeyPress={handleKeyPress} />
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
