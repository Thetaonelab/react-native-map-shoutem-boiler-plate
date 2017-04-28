
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
import {
    Heading, NavigationBar, Title, Image, Icon, Subtitle,
    Tile, Divider, Screen, ListView, Overlay, Lightbox, Card, Caption, Button
} from '@shoutem/ui';



class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            restaurants: [{
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            },
            {
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            },
            {
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            },
            {
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            },
            {
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            },
            {
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "http://s3.amazonaws.com/stnd-narcissa-prod/graphics/assets/000/000/028/medium/narcissa_night_january_2014_cwmosier-1.jpg?1390860141" },
            }],
        }
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
            <View>
                <ListView
                    data={this.state.restaurants}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

export default Restaurants;
