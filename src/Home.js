import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

    toLogin() {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
        		<View>
        			<Text>
        				Dit is de home pagina
        			</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            this.toLogin();
                        }}>
                        <Text>Terug </Text>
                    </TouchableOpacity>
        		</View>
        	);
    }
}
