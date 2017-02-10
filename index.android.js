import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.note}>
          Gordon Rawe is now writing code in London Canada.
        </Text>
        <Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}} />
        <Image source={require('./img/back_icon.png') }  style={{width: 40, height: 40}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    fontSize: 20,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('react-native-module', () => App);