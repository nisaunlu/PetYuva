import React from 'react'
import { LoginScreen, RegisterScreen } from '../screens/index'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (

        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name={'Login'} component={LoginScreen} />
            <Stack.Screen name={'Register'} component={RegisterScreen} />
        </Stack.Navigator>
    )

};

export default AuthStack;
