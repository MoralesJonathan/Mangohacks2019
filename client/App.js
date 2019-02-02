import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { EightBaseAppProvider, AuthContext } from '@8base/app-provider';
import { ReactNativeAuth0AuthClient } from '@8base/react-native-auth0-auth-client';
import Keys from './keys';
import { LoginForm } from './components/RewardsForm';
import { MenuPage } from './components/MenuPage';

const AUTH0_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH0_DOMAIN = 'https://auth.8base.com';

const authClient = new ReactNativeAuth0AuthClient({
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN,
});

const stringifySourceLocation = (sourceLocation = {}) =>
  `line: ${sourceLocation.line}, column: ${sourceLocation.column}`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Login',
      restaurantName: 'Restaurant',
      colorScheme: '',
      menuSyle: 1,
    };
  }

  renderContent = auth => {
    if (!auth.isAuthorized) {
      return <MenuPage />;
    }

    return (
      <React.Fragment>
        <MenuPage />
        <Button title="Logout" onPress={auth.purgeAuthState} />
      </React.Fragment>
    );
  };

  handleRequestError = ({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message = '', locations = [], path = '' }) => {
        Alert.alert(
          'GraphQL error',
          `Message: ${message}
Location: ${locations.map(stringifySourceLocation)}
Path: ${path}
`
        );
      });

    if (networkError) {
      Alert.alert('Network error', `[Network error]: ${networkError}`);
    }
  };

  render() {
    return (
      <EightBaseAppProvider
        authClient={authClient}
        uri={Keys.URI}
        onRequestError={this.handleRequestError}>
        {({ loading }) => {
          if (loading) {
            return <ActivityIndicator />;
          }

          return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <SafeAreaView style={styles.container}>
                <AuthContext.Consumer>{this.renderContent}</AuthContext.Consumer>
              </SafeAreaView>
            </KeyboardAvoidingView>
          );
        }}
      </EightBaseAppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
