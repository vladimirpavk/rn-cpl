import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalButtonPressed = (event)=>{
    console.log("Goals", goals);
    //setGoals(...goals, event.target.value);
    setGoals([...goals, goal]);
    setGoal('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your goal"
          onChangeText={(value)=>setGoal(value)}
          value={goal}
          style={styles.goalText}
        />  
        <Button
            style={styles.buttonStyle}
            onPress={goalButtonPressed}
            title="+"
            color="lightblue"
        />      
      </View>      
      <View style={styles.screen}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    marginTop: 40,
    borderWidth: 1,
  },  
  inputContainer: {       
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  goalText:{
    borderWidth: 2,
    width: "80%"
  },
  buttonStyle:{
    width: 20
  },
});
