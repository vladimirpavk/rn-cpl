import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = ()=>{

  const [userNumber, setUserNumber] = useState();
  const [numOfTryes, setNumOfTryes] = useState(null);

  const resetUserNumber = ()=>{
    setUserNumber(null);
    setNumOfTryes(null);
  }
  
  let content;

  if(!userNumber){
    content=<StartGameScreen gameStarted={setUserNumber}/>
  }
  else{
    if(!numOfTryes) content=<GameScreen imaginedNumber={userNumber} numberGuessed={setNumOfTryes}/>; 
    else content=<GameOverScreen numOfTries={numOfTryes} newGame={resetUserNumber}></GameOverScreen>
  }

  //content=<GameOverScreen numOfTries={5} newGame={()=>setUserNumber(null)}></GameOverScreen>

  return(
    <View style={styles.container}>
      <Header title="POGODI BROJ" />
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
