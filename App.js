import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import { set } from "timm";
import styles from "./components/styles";

export default function App() {
  const [numberOne, setNumberOne] = React.useState();
  const [numberTwo, setNumberTwo] = React.useState();
  const [error, setError] = React.useState();
  const [compareText, setCompareText] = React.useState("");
  function handlePress() {
    if (numberOne < 2 || numberOne > 100 || numberTwo < 2 || numberTwo > 100) {
      setError(true);
      setCompareText("");
    } else {
      setError(false);
      if (numberOne > numberTwo) {
        setCompareText("Number 1 is bigger than Number 2");
      } else if (numberOne == numberTwo) {
        setCompareText("Number 1 is equal to Number 2");
      } else if (numberOne < numberTwo) {
        setCompareText("Number 1 is less than Number 2");
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Midterm Exam</Text>
        <Text style={styles.headerSubText}>Compare two numbers</Text>
      </View>
      <View>
        <Text>Number 1:</Text>
        <TextInput
          value={numberOne}
          style={styles.input}
          onChangeText={setNumberOne}
          keyboardType="numeric"
        />
        <Text>Number 2:</Text>
        <TextInput
          value={numberTwo}
          style={styles.input}
          onChangeText={setNumberTwo}
          keyboardType="numeric"
        />
      </View>
      <Button title="COMPARE" onPress={handlePress} style={styles.button} />
      {error && (
        <Text style={styles.invalidText}>Invalid input, please try again.</Text>
      )}
      {compareText && <Text style={styles.compareText}>{compareText}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}
