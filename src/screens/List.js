import React from "react";
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';


function ContactItem({item}) {
    return (
        <View style={styles.listItem}>
            <Image style={{width: 60, height: 60, borderRadius: 30, backgroundColor: 'blue', marginRight: 10}}/>
            <View style={{alignItems: "flex-start", flex: 1, marginTop:5}}>
                <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                <Text>({item.email})</Text>
                <Text>{item.number}</Text>
            </View>
        </View>
    );
}


export default class List extends React.Component {
    state = {
        data: [
            {
                "name": "Jean Claudel Chefing",
                "company": "Société Générale",
                "email": "miyah.myles@gmail.com",
                "number": '00 00 00 00 00',
                "chefer": "Maeva",
                "sector": "Bank"
            },
            {
                "name": "Jean Claudel Chefing",
                "company": "Société Générale",
                "email": "june.cha@gmail.com",
                "number": '00 00 00 00 00',
                "chefer": "Maeva",
                "sector": "Bank"
            },
            {
                "name": "Jean Claudel Chefing",
                "company": "Société Générale",
                "email": "iida.niskanen@gmail.com",
                "number": '00 00 00 00 00',
                "chefer": "Maeva",
                "sector": "Bank"
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 18, marginLeft: 25, marginTop: 90, marginBottom:15}}>Récemment Ajouté: </Text>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    renderItem={({item}) => <ContactItem item={item}/>}
                    keyExtractor={item => item.email}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    listItem: {
        margin: 5,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        //alignItems: 'stretch',
        //  align:'left',
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 20
    }
});
