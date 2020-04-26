import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import * as Font from 'expo-font';
import * as Expo from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const loadFonts = ()=>{
  return Font.loadAsync(
    {
      'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf')
    }
  );
}

const App = ()=>{
  const [userNumber, setUserNumber] = useState();
  const [numOfTryes, setNumOfTryes] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <Expo.AppLoading
        startAsync={loadFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(err)=>console.log(err)} />
    )      
  }  

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
