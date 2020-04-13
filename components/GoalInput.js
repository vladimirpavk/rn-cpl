import React, {useState} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const GoalItem = (props)=>{
    const [goal, setGoal] = useState('');

    return(
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your goal"
          onChangeText={(value)=>setGoal(value)}
          value={goal}
          style={styles.goalText}
        />  
        <Button
            style={styles.buttonStyle}
            onPress={()=>props.addGoalButtonPressed(goal)}
            title="+"
            color="lightblue"
        />      
    </View>    
    );
}

const styles=StyleSheet.create({
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
      }
})

export default GoalItem;