import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // react-native-vector-icons kullanıyoruz
import { HomeScreen, ProfileScreen, MessagesScreen, ChatbotScreen } from '../screens/index';

// Bottom Tab Navigator'ı oluşturuyoruz
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Anasayfa" 
        component={HomeScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }} 
      />
      <Tab.Screen 
        name="Mesajlar" 
        component={MessagesScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="inbox" color={color} size={size} />,
        }} 
      />
      <Tab.Screen 
        name="Chatbot" 
        component={ChatbotScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="chat-bubble" color={color} size={size} />,
        }} 
      />
      <Tab.Screen 
        name="Profilim" 
        component={ProfileScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
        }} 
      />
    </Tab.Navigator>
  );
};

// Stack Navigator'ı oluşturuyoruz
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'>
      <Stack.Screen name={'Home'} component={TabNavigator} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
