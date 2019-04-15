import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

class App extends React.Component {

componentDidMount() {
  var config = {
      apiKey: "AIzaSyBI4VojeAFEEBB0P_UxTkSGqfeA9Z6kiJk",
      authDomain: "one-time-password-6844d.firebaseapp.com",
      databaseURL: "https://one-time-password-6844d.firebaseio.com",
      storageBucket: "one-time-password-6844d.appspot.com",
    };
    firebase.initializeApp(config);
}

render() {
  return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen'
  },
});

export default App;