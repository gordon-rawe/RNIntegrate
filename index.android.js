import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import ToastAndroid from './react-modules/androidtoast';

class App extends Component {
  say(){
    ToastAndroid.show('Awesome', ToastAndroid.SHORT);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPress={this.say}>
           <Text style={styles.note}>
              Gordon Rawe is now writing code in London Canada.
           </Text>
        </TouchableHighlight>
        <Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}} />
        <Image source={require('./resources/images/back_icon.png') }  style={{width: 80, height: 80}} >
            <Text>Shit</Text>
        </Image>
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