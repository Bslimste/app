import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	checkLogin() {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
        		<View>
        			<Text>
        				Dit is de login pagina
        			</Text>
        			<TouchableOpacity 
                        onPress={() => {
                            this.checkLogin();
                        }}>
                        <Text>Log In </Text>
                    </TouchableOpacity>
        		</View>
        	);
    }
}
