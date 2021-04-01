import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Todo </Text>
      </View>
    );
  }
}
