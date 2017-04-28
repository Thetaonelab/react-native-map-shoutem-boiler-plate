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
import MapGoogle from './screens/MapGoogle'
import Login from './screens/Login'
import Restaurants from './screens/Restaurants'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="mapGoogle" component={MapGoogle} title="MapGoogle" hideNavBar={true}/>
    <Scene key="restaurants" component={Restaurants} title="Restaurants" hideNavBar={true}/>
  </Scene>
);


export default class FanLikeYou extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}




AppRegistry.registerComponent('FanLikeYou', () => FanLikeYou);
