import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Platform
} from 'react-native';

import Card from '../components/Card';
import CPalete from '../Colors';

const StartGameScreen = (props)=>{   
    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [confirmedNumber, setConfirmedNumber] = useState('');
    const [errorMessageShown, setErrorMessageShown] = useState(false);

    const numberInputHandler = (inputText)=>{
        if(inputText.length > 2)
        {
            setErrorMessageShown(true);
            return;
        }
        else setErrorMessageShown(false);
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = ()=>{
        setEnteredNumber('');
        setConfirmed(false);
    }

    let confirmedText;

    const confirmInputHandler = ()=>{
        
        setErrorMessageShown(false);

         if(isNaN(enteredNumber) || enteredNumber < 1  ||  enteredNumber > 99){
             if(!Platform.OS==='web')
             {
                Alert.alert(
                    'Not a number',
                    'You must provide a number between 0 and 99',
                    [{
                        text: 'Okay',
                        onPress: ()=>{resetInputHandler},
                        style: 'default'
                    }]
                );
             }
             else{
                alert('You must provide a number between 0 and 99')
                resetInputHandler();
             }            
            return;
        };

        setConfirmed(true);
        setConfirmedNumber(enteredNumber);
        setEnteredNumber('');        
    }

    if(confirmed){
        confirmedText=(
            <Card width="40%">
                <Text style={{textAlign: 'center'}}>Izabrali ste broj</Text>                 
                <View style={styles.confirmedNumber}>
                    <Text style={{fontSize: 56}}>
                        {confirmedNumber}
                    </Text>                    
                </View>
                <Button
                    title="ZAPOČNI IGRU"
                    color={CPalete.primary}
                    onPress={()=>props.gameStarted(confirmedNumber)} />
            </Card>
        );
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>NOVA IGRA</Text>
                <Card width="80%">
                    <View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Zamisli broj i upiši ga u polje ispod</Text>
                        <TextInput
                            style={styles.textInput}                            
                            keyboardType='numeric'
                            maxLength={2}
                            onChangeText={(value)=>numberInputHandler(value)}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Obriši"
                                color={CPalete.secondary}
                                onPress={resetInputHandler}
                            ></Button>
                            <Button
                                title="Potvrdi"
                                color={CPalete.primary}
                                onPress={confirmInputHandler}></Button>        
                        </View>                        
                    </View>                    
                </Card>        
                {confirmedText}        
                {            
                    errorMessageShown ? 
                        <Card style={{backgroundColor: CPalete.secondary}}>
                            <Text>
                                Number must be between 0 and 99
                            </Text>
                        </Card>  : null
                }
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{    
        flex: 1,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'red'
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
    },     
    confirmedNumber:{
        borderWidth: 2,
        borderColor: CPalete.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default StartGameScreen;