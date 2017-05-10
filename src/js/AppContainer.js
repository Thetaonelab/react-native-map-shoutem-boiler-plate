import React from 'react';
import { Provider } from 'react-redux';
import store from './reduxStore';

import MapGoogle from './screens/MapGoogle'
import Login from './screens/Login'
import Restaurants from './screens/Restaurants'
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
    Login: { screen: Login},
    MapGoogle: { screen: MapGoogle},
    Restaurants: { screen: Restaurants},
});

class AppContianer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default AppContianer;