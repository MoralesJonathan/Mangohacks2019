import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, StatusBar, TabBarIOS, View, Image } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';
import Carousel from 'react-native-snap-carousel';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
});

class RecentlyOrdered extends React.Component {
    
  render() {

    return (
        <RkCard>
        <View rkCardHeader style={{textAlign: "center", alignContent: "center", justifyContent:'center' }}>
            <Text>Recently Ordered</Text>
        </View>
        <Image rkCardImg source={{ uri: 'https://www.laylita.com/recipes/wp-content/uploads/2008/02/Empanada-recipe.jpg'}} />
        <View rkCardContent rkCardHeader style={{textAlign: "center", alignContent: "center", justifyContent:'center' }}>
            <Text>Empanada</Text>
        </View>
    </RkCard>
    );
  }
}

export { RecentlyOrdered };