import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@shoutem/ui';
import { Actions, Scene, Router } from 'react-native-router-flux';

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
    GraphRequest,
    GraphRequestManager
} = FBSDK;

export default FacebookLoginButton = React.createClass({
    _handleOnPress: function () {
        console.log(this.props)
        const {onError,onReceiveData} = this.props
        LoginManager.logInWithReadPermissions(['public_profile','email','user_birthday']).then(
            function (result) {
                if (result.isCancelled) {
                    this.props.onError(error);
                } else {
                    console.log('Login success with permissions: '
                        , result.grantedPermissions.toString());
                    const infoRequest = new GraphRequest(
                        '/me?fields=email,birthday,picture',
                        null,
                        (error, result) => {
                            if (error) {
                                onError(error);
                            } else {
                                onReceiveData(result.email,result.birthday,result.picture.data.url)  
                            }
                        }
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();

                }
            },
            function (error) {
                alert('Login fail with error: ' + error);
            }
        );
    },
    render: function () {
        return (
            <View>

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
});