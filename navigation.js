import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import MainFooter from './components/MainFooter';
import {Goals} from '../data/goal';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown:false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Homescreen'
            screenOptions={screenOptions}>
            <Stack.Screen name='Homescreen' component={Goal}></Stack.Screen>
            <Stack.Screen name='Diary' component={Calendar}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

const navigation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <MainHead/>
        <SubHead/>
        <ScrollView>
        
        </ScrollView>
      <MainFooter/>
    </SafeAreaView>
  )
}

export default navigation