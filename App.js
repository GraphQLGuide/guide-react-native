import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import HomeScreen from './src/HomeScreen'
import ChapterScreen from './src/ChapterScreen'
import { screenOptions } from './src/styles'

const Stack = createStackNavigator()

const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: '📖 The GraphQL Guide' }}
          />
          <Stack.Screen
            name="Chapter"
            component={ChapterScreen}
            options={({
              route: {
                params: {
                  chapter: { number, title },
                },
              },
            }) => ({
              title: number ? `Chapter ${number}: ${title}` : title,
            })}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  )
}
