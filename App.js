import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/HomeScreen'
import { screenOptions } from './src/styles'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '📖 The GraphQL Guide' }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}
