import React from 'react';
import { TabBarNav } from './TabBar';
import { StyleSheet, ScrollView, ActivityIndicator, Text, StatusBar, TabBarIOS, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  ScrollView: {
    display: 'flex', 
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

class MenuPage extends React.Component {

  render() {

    return (
      <React.Fragment>
        <View style={styles.ScrollView}>
          <TabBarNav/>
        </View>
      </React.Fragment>
    );
  }
}

export { MenuPage };
