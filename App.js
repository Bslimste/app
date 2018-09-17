import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './src/Login.js';
import Home from './src/Home.js';


const Navigation = createSwitchNavigator({
        Login: Login,
        Home: Home
    },
    {
        initialRouteName: 'Login'
    }
);

export default class App extends React.Component {

    render() {
        return <Navigation />;
    }
}
