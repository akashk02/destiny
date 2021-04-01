import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  fuckReduxState,
} from "../redux/action/CounterActions";
import counter from "../redux/reducer";

class Counter extends Component {
  render() {
    // console.log("props = ", this.props)

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onPress={this.props.onIncrement} title={"increment"}></Button>
          <Text style={{ fontSize: 20, margin: 20 }}>{this.props.count}</Text>
          <Button onPress={this.props.onDecrement} title={"decrement"}></Button>
        </View>
        <Button
          onPress={this.props.fuckReduxState}
          title={"fuck redux state"}
        ></Button>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    count: state.Counter.count,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(incrementCounter()),
    onDecrement: () => dispatch(decrementCounter()),
    fuckReduxState: () => dispatch(fuckReduxState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
