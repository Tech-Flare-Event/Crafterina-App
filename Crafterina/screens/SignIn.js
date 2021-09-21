import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text style={{"fontWeight": "bold", fontSize: 25}}>SignIn Screen!</Text>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignIn;