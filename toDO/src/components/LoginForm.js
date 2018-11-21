import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//We will add "react-native-router-flux in the next step
import { Actions } from "react-native-router-flux";
import Realm from "realm";
​
import { SERVER_URL } from "../constants";
import { Project, Item } from "../schemas";
​
import { Button } from "./Button";
import { ModalView } from "./ModalView";
​
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
​
export class LoginForm extends Component {
  state = {};
  componentDidMount() {
  // Check if we're already authenticated
  if (Realm.Sync.User.current) {
    this.onAuthenticated(Realm.Sync.User.current);
  } else {
    this.setState({ isModalVisible: true });
  }
}
  
  render() {
  }
}