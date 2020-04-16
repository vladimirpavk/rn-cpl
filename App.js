import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = ()=>{
  return(
    <View style={styles.container}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  )
}

export default App; 

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex:1
  }
});
