import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator,
  AsyncStorage,
  Alert,
} from 'react-native';
import { EightBaseAppProvider, AuthContext } from '@8base/app-provider';
import { ReactNativeAuth0AuthClient } from '@8base/react-native-auth0-auth-client';
import Keys from './keys.js';
import { LoginForm } from './components/LoginForm';
import { HomePage } from './components/HomePage';

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
    this.state = { buttonText: '' };
  }
  componentDidMount() {
    this.checkForSetup();
  }

  _storeData = (key, values) => {
    return new Promise(function(resolve, reject) {
      AsyncStorage.setItem(key, JSON.stringify(values), error => {
        !error ? resolve('Done') : reject(error);
      });
    });
  };

  _retrieveData = key => {
    return new Promise(function(resolve, reject) {
      AsyncStorage.getItem(key, (error, value) => {
        error ? reject(error) : value != null ? resolve(value) : reject('empty');
      });
    });
  };

  checkForSetup = () => {
    console.log('CHECKING FOR SETUP');
    this._retrieveData('setupComplete')
      .then(result => {
        console.log('Setup found. Assigning custom content.');
        this.assignCustomContent();
      })
      .catch(err => {
        console.log('No setup found or error occured attempting to check for setup.');
        console.log(err);
        this.initSetup();
      });
  };

  assignCustomContent = () => {
    console.log('ASSINGING CUSTOM CONTENT');
    this._retrieveData('customCMSValues')
      .then(values => {
        values = JSON.parse(values);
        this.setState({ buttonText: values.buttonValue });
      })
      .catch(err => {
        console.log('Could not read custom values.');
        //Fallback to default values
        console.log(err);
      });
  };

  initSetup = () => {
    console.log('INITIALIZING THE SETUP');
    this._storeData('customCMSValues', { buttonValue: 'LOGIN' })
      .then(result =>
        this._storeData('setupComplete', { completed: true }).then(result => this.checkForSetup())
      )
      .catch(err => {
        console.log('Could not set custom values.');
        console.log(err);
        //Fallback to default values
      });
  };

  renderContent = auth => {
    if (!auth.isAuthorized) {
      return <LoginForm auth={auth} buttonText={this.state.buttonText} />;
    }

    return (
      <React.Fragment>
        <HomePage />
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
