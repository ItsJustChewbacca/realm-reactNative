import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { List, ListItem } from "react-native-elements";
import { v4 as uuid } from "uuid";
const projectKeyExtractor = project => project.projectId;
const styles = StyleSheet.create({
  placeholder: {
    textAlign: "center",
    padding: 10
  }
});
import { ModalView } from "./ModalView";
//import { SwipeDeleteable } from "./SwipeDeleteable";
export class ProjectList extends Component {
    static propTypes = {
        user: PropTypes.object,
        realm: PropTypes.object
    };
    state = {
    dataVersion: 0,
    isModalVisible: false
    };
    render() {
        return(
            <View>
                <Text>User identity is: {this.props.user.identity}</Text>
            </View>
        )
    }
}
