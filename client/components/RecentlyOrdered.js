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
        <View rkCardHeader>
            <Text>Recently Ordered</Text>
        </View>
        <View rkCardContent>
            <Text>Special Fried Rice</Text>
        </View>
    </RkCard>
    );
  }
}

export { RecentlyOrdered };