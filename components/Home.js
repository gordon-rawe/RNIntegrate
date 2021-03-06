import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  { ToastAndroid } from '../react-modules/AndroidModules';

class Home extends Component {
  constructor(){
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(name,message){
    this.props.navigator.push({name,message});
    ToastAndroid.show(message.toString(),ToastAndroid.SHORT);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Home page</Text>
        <TouchableHighlight underlayColor="#33884995" onPress={() => this.navigate('aboutpage','Hello Gordon! ')}>
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
