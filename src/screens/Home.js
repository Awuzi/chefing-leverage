import React, {Component} from "react";
import {Button, Text, View, StyleSheet} from "react-native";

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button
                    style={{ padding: 16, marginTop: 50 }}
                    title="Add New Item"
                    color="green"
                    onPress={() => this.props.navigation.navigate("AddForm")} //Naviguer vers un 'screen' different
                />
                <Button
                    style={{ padding: 16, marginTop: 50 }}
                    title="List of Items"
                    color="blue"
                    onPress={() => this.props.navigation.navigate("List")}
                />
            </View>
        );
    }
}
