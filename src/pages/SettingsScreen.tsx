import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function SettingsScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-green-500'>
      <Text className='text-blue-100'>Home!</Text>
    </View>
  );
}