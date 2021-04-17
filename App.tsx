import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./js/screens/Counter";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./js/redux/reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";
import RootNavigator from "./js/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "./js/test";

const store = createStore(Reducer, applyMiddleware(logger));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator></RootNavigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
