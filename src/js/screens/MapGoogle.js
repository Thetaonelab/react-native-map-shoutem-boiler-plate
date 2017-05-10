import React, { Component } from 'react';
import MapView from 'react-native-maps';
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
    TouchableHighlight,
    Button
} from 'react-native';
import Restaurants from './Restaurants'

const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
    },
    container: {
        flex: 9, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 100,
        backgroundColor: 'red'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    toolbar: {
        height: 56,
        backgroundColor: '#4883da',
    }
});

const list = [
    {
        title: 'Appointments',
        subtitle: 'Manage meetings and schedules',
        icon: 'av-timer'
    },
    {
        title: 'Trips',
        subtitle: 'Paid trips',
        icon: 'flight-takeoff'
    },
]
class MapGoogle extends Component {

    constructor() {
        super();
        this.state = { isDrawerOpened: false }
        this._openDrawer = this._openDrawer.bind(this);
        this._closeDrawer = this._closeDrawer.bind(this);
        this._onActionSelected = this._onActionSelected.bind(this);
    }

    _openDrawer() {
        this.drawer.openDrawer();
    }
    _closeDrawer() {
        this.drawer.closeDrawer();
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (this.state.isDrawerOpened) {
                this._closeDrawer()
                return true
            }
            else {
                return false
            }
        }.bind(this));
    }

    _onActionSelected(position) {
        // if (position === 0) { // index of 'Settings'
        this.props.navigation.navigate('Restaurants')
        //} 
    }

    render() {
        const { region } = this.props;
        console.log(region);
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ height: 150, backgroundColor: '#ff5454' }}>
                </View>
                <Text>Hello</Text>
            </View>);

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={(_drawer) => this.drawer = _drawer}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                onDrawerClose={() => { this.setState({ isDrawerOpened: false }) }}
                onDrawerOpen={() => { this.setState({ isDrawerOpened: true }) }}
            >

                <View style={styles.parentContainer}>
                    {/*<ToolbarAndroid
                        title="AwesomeApp"
                        style={styles.toolbar}
                        actions={[{ title: 'Settings', icon: require('../../../img/settings.png'), show: 'always' }]}
                        titleColor='white'
                        navIcon={require('../../../img/menu.png')}
                        onIconClicked={this._openDrawer}
                        onActionSelected = {this._onActionSelected}>
                    </ToolbarAndroid>*/}

                    <View style={styles.container}>

                        <MapView
                            style={styles.map}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            showsMyLocationButton={true}
                            showsCompass={false}
                            showsScale={true}
                        >
                        </MapView>
                        <Button
                            onPress={() => { this._onActionSelected(1) }}
                            title="Hello"
                            color="rgba(14,172,142,.5)"
                            accessibilityLabel="Learn more about this purple button"
                        />

                    </View>
                    <View style={styles.container2}>
                        <Button
                            style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
                            onPress={() => { this._onActionSelected(1) }}
                            title="See Restaurants"
                            color="rgba(22,45,189,1)"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>

                </View>
            </DrawerLayoutAndroid>
        );
    }


}


MapGoogle.navigationOptions = {
    title: "Hi",

}
export default MapGoogle;


