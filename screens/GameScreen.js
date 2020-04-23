import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import Card from '../components/Card';
import CPalete from '../Colors';

const generateRandomNumber = (min, max, exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max-min)) + min;

    console.log(min, max, exclude);

    if(rndNumber===exclude){
        return generateRandomNumber(min, max, exclude);
    }
    return rndNumber;
}

const GameScreen = (props)=>{
    const [computerNumber, setComputerNumber] = useState(
        generateRandomNumber(0, 99, null)
    );

    //console.log(computerNumber, parseInt(props.imaginedNumber));

    const lowerNumber = ()=>{
        setComputerNumber(
            (oldValue)=>{
                return generateRandomNumber(props.imaginedNumber, oldValue, oldValue)
            });    
    }

    const greaterNumber = ()=>{
        setComputerNumber(
            (oldValue)=>{
                return generateRandomNumber(computerNumber, props.imaginedNumber, oldValue)
            });
        //console.log(computerNumber);
    }    

    let endGame;
    if(computerNumber===props.imaginedNumber){
        console.log('End game...');
        endGame=<Button
            title="START A NEW GAME"
            color={CPalete.primary}
            onPress={endGame} />
    }


    return(
        <View style={styles.screen}>           
            <Text style={{fontSize: 36}}>Your number {props.imaginedNumber}</Text>
            <View style={styles.screen}>
                <Card width="60%">
                    <Text style={{textAlign: 'center'}}>Computer guess</Text>                 
                    <View style={styles.confirmedNumber}>
                        <Text style={{fontSize: 56}}>
                            {computerNumber}
                        </Text>                    
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="LOWER"
                            color={CPalete.primary}
                            onPress={lowerNumber} />
                        <Button
                            title="GREATER"
                            color={CPalete.primary}
                            onPress={greaterNumber} />
                    </View>
                    {endGame}
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