import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "darkturquoise",
    color: "white",
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    type: "bold",
    fontSize: 40,
  },
  headerSubText: {
    color: "white",
    type: "bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
  },
  invalidText: {
    color: "red",
  },
  compareText: {
    color: "green",
  },
  button: {
    alignContent: "center",
    borderStyle: "solid",
    backgroundColor: "black",
    borderColor: "black",
  },
});
