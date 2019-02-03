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
                <Text>{item.subtitle}</Text>
            </View>
        </RkCard>
    );
}
  render() {

    return (
        <Carousel layout={'default'} data={[
            {
                title: 'Morcilla',
                subtitle: 'Sausages filled with blood that are filled and cooked until solid',
                illustration: 'https://dompal.tienda/wp-content/uploads/2016/03/135104.png'
            },
            {
                title: 'Yuca Frita',
                subtitle: 'Yuca that isdeep fried like French fries.',
                illustration: 'https://i.pinimg.com/originals/e2/73/24/e27324709c0e7ab1152bde2224d5c3ae.jpg'
            },
            {
                title: 'Chicharron',
                subtitle: 'Chicharrón is a dish generally consisting of fried pork belly or fried pork rinds. ',
                illustration: 'https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/receta-de-chicharron-.jpg'
            },
            {
                title: 'Empanada',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://www.laylita.com/recipes/wp-content/uploads/2008/02/Empanada-recipe.jpg'
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