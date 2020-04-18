import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props)=>{
    return(
        <View style={[props.style, styles.shadow]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow:{
        marginTop: 20,
        justifyContent: 'center',
        width: '80%',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        borderWidth: 1,
        borderColor: 'green'
    }
})

export default Card;