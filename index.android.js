import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Navigator } from 'react-native';
import Home from './components/Home';
import About from './components/About';

export default class Routing extends Component {
  constructor(){
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route,navigator){
    if(route.name === 'homepage'){
      return <Home navigator={navigator} />
    }else if(route.name === 'aboutpage'){
      return <About navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name:'homepage'}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('react-native-module', () => Routing);
