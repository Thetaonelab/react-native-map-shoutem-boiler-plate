import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    ToolbarAndroid,
    TouchableOpacity,
    DrawerLayoutAndroid,
    BackAndroid,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@shoutem/ui';
import { Actions, Scene, Router } from 'react-native-router-flux';
import FacebookLoginButton from '../components/FacebookLoginButton'

const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        backgroundColor: "#4883da",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    },
    buttonStyle: {
        marginTop: 100,
        backgroundColor: "#3b5998",
        padding: 7
    }
})

class Login extends Component {
    constructor(props){
        super(props)
    }

    _onfacebookLoginSuccess(email,birthday,profilePic){
        console.log('Success fetching data: ' , email,birthday,profilePic);
        Actions.mapGoogle()
    }

    render() {
        return (
            <View style={styles.parentContainer}>
                <Icon name="rocket" size={49} color="#FFEB3B" style={{ margin: 20 }} />
                <Text style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: 4, fontFamily: "Roboto" }}>
                    Welcome to FanLikeYou
                </Text>
                <Text style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }}>
                    Find a fan friend near you.
                </Text>

                <FacebookLoginButton onReceiveData={this._onfacebookLoginSuccess} onFailure={console.log}/>
            </View>
        );
    }
}

export default Login;