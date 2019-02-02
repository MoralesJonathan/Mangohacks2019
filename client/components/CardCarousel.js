import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, StatusBar, TabBarIOS, View, Image } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';
import Carousel from 'react-native-snap-carousel';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
});

class CardCarousel extends React.Component {
    
_renderItem ({item, index}) {
    return (
        <RkCard>
            <View rkCardHeader>
                <Text>{item.title}</Text>
            </View>
            <Image rkCardImg source={{ uri: item.illustration }} />
            <View rkCardContent>
                <Text> quick brown fox jumps over the lazy dog</Text>
            </View>
        </RkCard>
    );
}
  render() {

    return (
        <Carousel layout={'default'} data={[
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg'
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'https://i.imgur.com/MABUbpDl.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/lceHsT6l.jpg'
            }
        ]} renderItem={this._renderItem} sliderWidth={300}
                      itemWidth={300}/>
    );
  }
}

export { CardCarousel };