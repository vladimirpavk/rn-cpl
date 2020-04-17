import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import Card from '../components/Card';
import CPalete from '../Colors';

const StartGameScreen = (props)=>{
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (inputText)=>{
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''))
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
                <Card>
                    <View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Select a number</Text>
                        <TextInput
                            style={styles.textInput}                            
                            keyboardType='numeric'
                            maxLength={2}
                            onChangeText={(value)=>numberInputHandler(value)}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Reset" color={CPalete.secondary}></Button>
                            <Button title="Confirm" color={CPalete.primary}></Button>        
                        </View>
                    </View>
                </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{    
        flex: 1,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginTop: 20
    },
    textInput:{
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderColor: 'red',
        fontSize: 30,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop:20
    }

})


export default StartGameScreen;