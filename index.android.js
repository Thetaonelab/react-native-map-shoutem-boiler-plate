import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './src/js/AppContainer'

class FanLikeYou extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

AppRegistry.registerComponent('FanLikeYou', () => FanLikeYou);
