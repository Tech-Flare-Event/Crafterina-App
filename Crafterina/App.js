
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {Home,SignIn,Signup,WelcomeScreen} from './screens'; 

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
               screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Welcome'}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


