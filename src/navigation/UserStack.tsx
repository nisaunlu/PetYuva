import React from 'react'
import {HomeScreen,ProfileScreen} from '../screens/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
 
 const UserStack = () => {

    return (
     <Stack.Navigator
     screenOptions={{headerShown:false}}
     initialRouteName='Home'>
        <Stack.Screen name ={'Home'} component={HomeScreen}/>
        <Stack.Screen name ={'Profile'} component={ProfileScreen}/>
     </Stack.Navigator>
      );

 };

 export default UserStack;
  
 


