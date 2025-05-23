import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Home, Message, userIcon, chatBoxIcon } from '../../assent/images';
import { HomeScreen, ProfileScreen, MessagesScreen, ChatbotScreen } from '../screens/index';
import MessageDetails from '../screens/MessageDetails';
import ProfileEdit from '../screens/ProfileEdit';
import NewListing from '../screens/NewListing';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Anasayfa" 
        component={HomeScreen} 
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Image source={Home} style={{width: size, height: size, tintColor: color}} />
          )
        }} 
      />
      <Tab.Screen 
        name="Mesajlar" 
        component={MessagesScreen} 
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Image source={Message} style={{width: size, height: size, tintColor: color}} />
          )
        }} 
      />
      <Tab.Screen 
        name="Chatbot" 
        component={ChatbotScreen} 
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Image source={chatBoxIcon} style={{width: size, height: size, tintColor: color}} />
          )
        }} 
      />
      <Tab.Screen 
        name="Profilim" 
        component={ProfileScreen} 
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Image source={userIcon} style={{width: size, height: size, tintColor: color,resizeMode:'contain'}} />
          )
        }} 
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'>
      <Stack.Screen name={'Home'} component={TabNavigator} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="NewListing" component= {NewListing} />
      <Stack.Screen name={'MessageDetails'} component={MessageDetails} />

    </Stack.Navigator>
  );
};

export default UserStack;