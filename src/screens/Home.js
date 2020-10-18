import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


const Home = props => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{uri: props.photoUrl}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})

export default Home;
