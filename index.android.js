import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.note}>
          Gordon Rawe is now writing code in London Canada.
        </Text>
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
    fontSize: 20
  }
});

AppRegistry.registerComponent('react-native-module', () => App);