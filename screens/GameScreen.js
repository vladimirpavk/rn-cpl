import React, {usestate} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

const generateRandomNumber = (min, max, exclude)=>{
    let min = Math.ceil(min);
    let max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max-min)) + min;
    if(rndNumber===exclude){
        return generateRandomNumber(min, max, exclude);
    }
    return rndNumber;
}

const GameScreen = (props)=>{
    return(
        <View>
            <Text>Game screen</Text>
            <Text>You choosed {props.imaginedNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
 
    }
);

export default GameScreen;