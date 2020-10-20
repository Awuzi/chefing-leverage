import React, {Component} from "react";
import {Button, Text, TextInput, View, StyleSheet, linearGradient} from 'react-native';

import {Ionicons} from "@expo/vector-icons";


export default class AddForm extends Component {

    constructor() {
        super();
        this.state = {
            lastname: '',
            firstname: '',
            tel: '',
        };
    }

    submit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <View style={{
                margin: 20,
                background: linearGradient('#f00', '#00f', .7)
            }}>
                <Text style={{marginTop: 10}}>Contact Screen</Text>

                <TextInput
                    placeholder="Entrez un nom"
                    onChangeText={(value) => this.setState({lastname: value})}
                    style={{borderWidth: 1, borderColor: "#20232a", borderRadius: 3, height: 45, marginTop: 10}}
                />

                <TextInput
                    placeholder="Entrez un prénom"
                    onChangeText={(value) => this.setState({firstname: value})}
                    style={{borderWidth: 1, borderColor: "#20232a", borderRadius: 3, height: 45, marginTop: 10}}
                />

                <TextInput
                    placeholder="Entrez un prénom"
                    onChangeText={(value) => this.setState({tel: value})}
                    style={{borderWidth: 1, borderColor: "#20232a", borderRadius: 3, height: 45, marginTop: 10}}
                />

                <Button
                    style={{borderRadius: 3, height: 45, marginTop: 15}}
                    title="Add" onPress={this.submit}/>

            </View>
        );
    }
}
