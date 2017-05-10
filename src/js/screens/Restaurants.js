import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    ToolbarAndroid
} from 'react-native';
import {
    Heading, NavigationBar, Title, Image, Icon, Subtitle,
    Tile, Divider, Screen, ListView, Overlay, Lightbox, Card, Caption, Button, Spinner
} from '@shoutem/ui';
import { loadRestaurantData } from '../reduxActions/restaurants'


class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(loadRestaurantData())
    }

    renderRow(restaurant) {
        return (
            <View>
                <Lightbox>
                    <Image
                        styleName="large-banner"
                        source={{ uri: restaurant.image.url }} >
                        <Tile>
                            <Title styleName="md-gutter-bottom" style={{ fontSize: 33 }}>{restaurant.name}</Title>
                            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                        </Tile>
                    </Image>
                </Lightbox>
                <Divider styleName="line" />
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {this.props.restaurantDataLoading ? (<Text style={{ fontSize: 20 }}> Loading ... </Text>) :
                    <ListView
                        data={this.props.restaurantData ? this.props.restaurantData : []}
                        renderRow={this.renderRow}
                    />}
            </View>
        );
    }
}

Restaurants.navigationOptions = {
    title: "Restaurants",
    gesturesEnabled: true
}

var select = (state) => ({
    restaurantDataLoading: state.restaurants.restaurantDataLoading,
    restaurantData: state.restaurants.restaurantData
})

export default connect(select)(Restaurants);
