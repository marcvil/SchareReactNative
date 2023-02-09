import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
        <Text className='text-green-500'>Open up App.js to sjhjhvt working on your app!</Text>
   </NavigationContainer>
  );
}


