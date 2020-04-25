import React, {useState, useRef} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Platform
} from 'react-native';

import Card from '../components/Card';
import CPalete from '../Colors';

const generateRandomNumber = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max-min)) + min;

    //console.log(min, max, rndNumber);

    return rndNumber;
}

const GameScreen = (props)=>{
    console.log(props);

    const [computerNumber, setComputerNumber] = useState(
        generateRandomNumber(0, 100)
    );      

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const numOfTries = useRef(0);
    const buttonsDisabled = useRef(false);

    //console.log('computerNumber', computerNumber, 'minValue', minValue, 'maxValue', maxValue);

    const lowerNumber = ()=>{
        if(computerNumber < props.imaginedNumber)
        {
            if(Platform.OS==="web"){
                alert('Ne laži !!!');   
                return;
            }                
        }
        
        numOfTries.current++;
        setMaxValue(computerNumber);
        setComputerNumber(
            (oldValue)=>generateRandomNumber(oldValue - 1, minValue));            
    }

    const greaterNumber = ()=>{
        if(computerNumber > props.imaginedNumber){
            if(Platform.OS==="web"){
                alert('Ne laži !!!');
                return;
            }
        }
        
        numOfTries.current++;
        setMinValue(computerNumber);
        setComputerNumber(
            (oldValue)=>generateRandomNumber(oldValue + 1, maxValue));
    }    

    //console.log('computerNumber', computerNumber, 'imaginedNumber', props.imaginedNumber);
  
    if(parseInt(computerNumber)===parseInt(props.imaginedNumber)){
        props.numberGuessed(numOfTries.current);
    }
    /* if(parseInt(computerNumber)===parseInt(props.imaginedNumber)){
        //console.log('End game...');
        buttonsDisabled.current = true;
        
        endGame=(
            <View>
                <Text style={{marginTop: 10, marginBottom: 10, fontSize: 20, color: 'red'}}>
                    Computer guessed in {numOfTries.current} tries...</Text>
                <Button
                    onPress={props.newGame}
                    style={{marginTop: 10}}
                    title="START A NEW GAME"
                    color={CPalete.primary}/>
            </View>                        
        )}; */
    
    return(
        <View style={styles.screen}>           
            <Text style={{fontSize: 36}}>Vaš broj je {props.imaginedNumber}</Text>
            <Text style={{fontSize: 24}}>Pokušaj: {numOfTries.current}</Text>
            <View style={styles.screen}>
                <Card width="60%">
                    <Text style={{textAlign: 'center', fontSize: 16}}>Da li je ovo Vaš broj ?</Text>                 
                    <View style={styles.confirmedNumber}>
                        <Text style={{fontSize: 56}}>
                            {computerNumber}
                        </Text>                    
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="MANJE"
                            color={CPalete.primary}
                            onPress={lowerNumber} 
                            disabled={buttonsDisabled.current}/>
                        <Button
                            title="VIŠE"
                            color={CPalete.primary}
                            onPress={greaterNumber} 
                            disabled={buttonsDisabled.current}/>
                    </View>                                
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    confirmedNumber:{
        borderWidth: 2,
        borderColor: CPalete.secondary,
        padding: 10,
        borderRadius: 10,        
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default GameScreen;