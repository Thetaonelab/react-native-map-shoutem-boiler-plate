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
        this._handleOnPress = this._handleOnPress.bind(this)
    }
    _handleOnPress() {
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

                <Button style={{
                    marginTop: 100,
                    backgroundColor: "#3b5998",
                    padding: 12,
                }} onPress={this._handleOnPress}>
                    <Icon name="facebook" size={25} color='white' />
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 7 }}>Login with facebook</Text>
                </Button>
            </View>
        );
    }
}

export default Login;