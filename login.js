import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';

class Login extends Component {
  constructor() {

  }
  render(){
    return (
      <View style=styles.container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('login', () => Login);
