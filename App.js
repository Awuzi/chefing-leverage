import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from "./src/screens/List";
import Home from "./src/screens/Home";
import AddForm from "./src/screens/AddForm";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="List" component={List}/>
                <Stack.Screen name="AddForm" component={AddForm}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
