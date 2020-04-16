import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = (props)=>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
                <Card>
                    <View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Select a number</Text>
                        <TextInput style={styles.textInput}/>
                        <View style={styles.buttonContainer}>
                            <Button title="Reset"></Button>
                            <Button title="Confirm"></Button>        
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
        borderWidth:2,
        borderColor: 'red',
        fontSize: 30,
        keyboardType: 'numeric',
        maxLength: 2,
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