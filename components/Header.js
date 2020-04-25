import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Header = (props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width: "100%",
        height: 90,
        marginTop: 40,
        backgroundColor: '#f7287b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'        
    }
})

export default Header;