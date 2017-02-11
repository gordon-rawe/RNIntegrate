import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Home extends Component {
  constructor(){
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(name){
    this.props.navigator.push({name});
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Home page</Text>
        <TouchableHighlight underlayColor="red" onPress={() => this.navigate('aboutpage')}>
          <Text style={styles.normal}>Go to about page</Text>
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
    backgroundColor: '#F5FCFF'
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

export default Home
