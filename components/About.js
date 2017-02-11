import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { IntentAndroid,ToastAndroid } from '../react-modules/AndroidModules';

class About extends Component {

  handleBack(){
    this.props.navigator.pop();
    IntentAndroid.canOpenURL('com.gordon.rawe.rnintegrate.NativeActivity' , (supported) => {
      if(!supported){
        ToastAndroid.show("open url failed",ToastAndroid.SHORT);
      }else{
        IntentAndroid.openURL('com.gordon.rawe.rnintegrate.NativeActivity');
      }
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.props.message}</Text>
        <TouchableHighlight underlayColor="#33884995" onPress={ () =>  this.handleBack() } >
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
