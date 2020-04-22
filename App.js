import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = ()=>{

  const [userNumber, setUserNumber] = useState();  
  
  let content;

  if(!userNumber) content=<StartGameScreen gameStarted={setUserNumber}/>
  else content=<GameScreen imaginedNumber={userNumber}/>;

  return(
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content}
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
