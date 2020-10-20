import React from "react"
import {Button, Image, StyleSheet, Text, View} from "react-native"
import * as Google from "expo-google-app-auth";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: ""
        }
    }

    signIn = async () => {
        try {
            // identifiant recupéré dans la creation d'un projet sur google api
            const result = await Google.logInAsync({
                androidClientId: "70469405494-mo0v0gbh0d7f9schq2imkoh9b49djkaq.apps.googleusercontent.com",
                iosClientId: "70469405494-8rg83keqbfk70ut7774dg425csdhv2bf.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                })
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: this.getRandomColor(),
            }}>
                {this.state.signedIn ? (
                    <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl}/>
                ) : (
                    <LoginPage signIn={this.signIn}/>
                )}
            </View>
        )
    }
}

const LoginPage = props => {
    return (
        <View>
            <Text style={{fontSize: 25, marginBotton: 15}}>Sign In With Google</Text>
            <Button style={{borderRadius: 20}} title="Sign in with Google" onPress={() => props.signIn()}/>
        </View>
    )
}

const LoggedInPage = props => {
    return (
        <View>
            <Text>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{uri: props.photoUrl}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})
