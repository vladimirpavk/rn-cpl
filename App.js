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

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {  
  const [goals, setGoals] = useState([]);
  const [isGoalInputVisible, setGoalInputVisible] = useState(false);

  const goalButtonPressed = (goal)=>{
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
    /* let newGoalsArray = goals.filter((goal)=>{
      return goal.key !== key
    });
    setGoals(newGoalsArray); */
    setGoals(
      (oldGoalsArray)=>{
        oldGoalsArray.filter(
          (goal)=>goal.key !== key
        )
      }
    )
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
      <Button
        title="Add new goal"
        onPress={()=>{setGoalInputVisible(true)}}
      />
      <GoalInput 
        visible={isGoalInputVisible}
        addGoalButtonPressed={goalButtonPressed}
      />
      <View style={styles.goalList}>
        <FlatList
          data={goals}
          renderItem={
            (itemData)=>
              <GoalItem
                title={itemData.item.goal}
                onPressed={()=>{onGoalItemPressed(itemData.item.key)}}/>                                                
          }          
        />
      </View>      
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
  }
});
