/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator,
  ToolbarAndroid
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import MapGoogle from './src/js/screens/MapGoogle'
import Login from './src/js/screens/Login'
import Restaurants from './src/js/screens/Restaurants'
import { Provider } from 'react-redux';
import store from './src/js/reduxStore';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="mapGoogle" component={MapGoogle} title="MapGoogle" hideNavBar={true} />
    <Scene key="restaurants" component={Restaurants} title="Restaurants" hideNavBar={true} />
  </Scene>
);

class FanLikeYou extends Component {
  render() {
    return (
     
        <Provider store={store}>
          <Router scenes={scenes} />
        </Provider>
         
    )
  }
}

const App =() => (
    <FanLikeYou />
)
AppRegistry.registerComponent('FanLikeYou', () => App);
