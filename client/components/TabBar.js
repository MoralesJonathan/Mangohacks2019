import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, StatusBar, TabBarIOS, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  TabBarIOS: {
    display: 'flex', 
    flexDirection: 'row'
  }
});

class TabBar extends React.Component {

  render() {

    return (
      <View style={styles.TabBarIOS}>
        <TabBarIOS style={{alignSelf: 'flex-end'}}>
          <TabBarIOS.Item title="Find" icon={require('../assets/find.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="Menu" icon={require('../assets/menu.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="Home" icon={require('../assets/home.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="Cart" icon={require('../assets/cart.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="Account" icon={require('../assets/account.png')}></TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

export { TabBar };