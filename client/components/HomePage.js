import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, StatusBar } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  todosList: {
    width: '100%',
  },
});

class HomePage extends React.Component {

  render() {
    // if (this.props.data.loading) {
    //   return <ActivityIndicator size="large" color="#0000ff" />;
    // }

    return (
      <React.Fragment>
        <ScrollView style={styles.todosList}>
        <Text>HELLO WORLD!</Text>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        </ScrollView>
      </React.Fragment>
    );
  }
}

export { HomePage };
