import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={{"fontWeight": "bold", fontSize: 25}}>SignUp Screen!</Text>
         
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

export default SignUp;