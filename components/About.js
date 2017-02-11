import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class About extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.props.message}</Text>
        <TouchableHighlight underlayColor="red" onPress={() => this.props.navigator.pop()} >
          <Text style={styles.normal}>Dismiss this page</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
  normal: {
    fontSize: 25,
    color: 'red'
  },
  content:{
    fontSize: 30,
    marginBottom:20
  }
});

export default About
