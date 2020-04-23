import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props)=>{

    const styles = StyleSheet.create({
        shadow:{
            marginTop: 20,
            justifyContent: 'center',
            padding: 20,
            shadowColor: 'black',
            width:`${props.width}`,
            shadowOffset: { width: 1, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.3,
            borderWidth: 1,
            borderColor: 'green'
        }
    });
    
    return(        
        <View style={styles.shadow}>
            {props.children}
        </View>
    );
}

export default Card;