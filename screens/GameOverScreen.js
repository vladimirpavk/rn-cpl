import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

import Card from '../components/Card';

const GameOverScreen = (props)=>{
    return(
        <View style={styles.screen}>
            <Card width="80%">
                <Text style={styles.tekst}>Kompjuter je pogodio iz {props.numOfTries} pokušaja.</Text>
                <Text style={styles.tekst}>KRAJ IGRE</Text>
                <Button title="Pokreni ponovo igru" onPress={props.newGame}/>
            </Card>
        </View>        
    )
}

const styles = StyleSheet.create(
    {
        screen:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        tekst:{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20
        }
    }
);

export default GameOverScreen;