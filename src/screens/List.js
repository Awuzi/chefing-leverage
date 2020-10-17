import React from "react";
import {Text, View} from "react-native";
import type {Contact} from "../models/contact";
import {TextInput} from "react-native-web";


//recuperer la data de la sheet ?? normalement
const contacts: Contact = [
    {
        name: 'blablalba',
        firstname: 'blablalba',
        phone: 'blablalba',
        email: 'blablalba',
        infos: 'blablalba'
    },
    {
        name: 'blublublu',
        firstname: 'blublublu',
        phone: 'blublublu',
        email: 'blublublu',
        infos: 'blublublu'
    }
]

const List = () => {
    return (
        <View>
            <Text style={{ padding: 16, marginTop: 50 }}>Ajoutés récement :</Text>
            <Text style={{ padding: 16, marginTop: 50 }}>Une synchro sur une gsheet en arrivant sur cette page</Text>

            {contacts.map(contact => <Text>{contact.name} - {contact.phone} ({contact.email})</Text>)}
        </View>
    );
}
export default List;
