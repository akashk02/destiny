import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddTodo = (props) => {
  const [task, setTask] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        borderWidth: 1,
        padding: 16,
      }}
    >
      <TextInput
        label="Add Task"
        value={task}
        onChangeText={(text) => {
          setTask(text);
        }}
      />

      <Button
        onPress={() => {}}
        style={{ marginTop: 100, marginHorizontal: 50 }}
      >
        ADD
      </Button>
    </View>
  );
};

export default AddTodo;
