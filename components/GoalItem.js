import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = (props)=>{
    return(
        <View style={styles.goalItem}>
             <Text
                onPress={props.onPressed}>
                {props.title}
            </Text>
        </View>       
    );
}

const styles=StyleSheet.create({
    goalItem:{
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: "red",
        width: "100%"
      }
})
export default GoalItem;