
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {Home,InitialScreen} from './screens';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
               screenOptions={{
                headerShown: false
            }}
            initialRouteName={'InitialScreen'}
            >
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


