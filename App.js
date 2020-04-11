import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView ,
  FlatList
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalButtonPressed = (event)=>{
    //console.log("Goals", goals);    
    if(goal.length === 0) return;
    setGoals((oldGoals)=>[...oldGoals, {
      key:Math.random().toString(),
      goal:goal
    }]);
    //setGoal('');
  }

  const onGoalItemPressed = (key)=>{
    //console.log(key);
    let newGoalsArray = goals.filter((goal)=>{
      return goal.key !== key
    });
    setGoals(newGoalsArray);
  }

  const goalList = goals===[] ? null : goals.map(
    (goal)=>{
      return <Text
        key={goal.key}  
        style={styles.goalItem}
        onPress={()=>onGoalItemPressed(goal.key)}
        >
        {goal.goal}
      </Text>;
    }            
  ); 

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
      <FlatList
        data={goals}
        renderItem={
          (itemData)=>{
            return(
              <View style={styles.goalList}>
                <Text>{itemData.item.goal}</Text>
              </View>
            )
          }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    marginTop: 40,
    borderWidth: 1,
  },
  goalList:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  goalItem:{
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    width: "80%"
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