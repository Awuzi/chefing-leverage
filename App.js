import React from "react"
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "./src/screens/Login";
import List from "./src/screens/List";
import AddForm from "./src/screens/AddForm";


const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            if (route.name === 'Login') {
                                iconName = 'ios-contact'
                            } else if (route.name === 'List') {
                                iconName = 'ios-list';
                            } else if (route.name === 'Ajouter') {
                                iconName = 'ios-person-add'
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color}/>;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Login" component={Login}/>
                    <Tab.Screen name="Ajouter" component={AddForm}/>
                    <Tab.Screen name="List" component={List}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
