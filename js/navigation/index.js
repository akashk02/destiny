import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CounterScreen from "../screens/Counter";
import TodoScreen from "../screens/Todo";
import AddTodoScreen from "../screens/AddTodo";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const Counter = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Counter"
      component={CounterScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const Todo = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Todo"
      component={TodoScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const AddTodo = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AddTodo"
      component={AddTodoScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Counter" component={Counter}></Tab.Screen>
    <Tab.Screen name="Todo" component={Todo}></Tab.Screen>
    <Tab.Screen name="AddTodo" component={AddTodo}></Tab.Screen>
  </Tab.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <MyTabs></MyTabs>
  </NavigationContainer>
);

export default RootNavigator;
