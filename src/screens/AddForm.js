import React, {Component} from "react";
import {Button, Text, TextInput, TouchableHighlight, View,} from 'react-native';


export default class AddForm extends Component {
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        alert(this.state.name);
    };

    render() {
        return (
            <View>
                <Text>Ajouter un item</Text>

                <TextInput onChange={this.handleChange}/>

                <Button title="Add" onPress={this.handleSubmit}/>


                <Text>{this.state.name}</Text>


            </View>
        );
    }
}
