import React from 'react'
import {createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, ScrollView} from 'react-native';
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import MainFooter from './components/MainFooter';
import {Calendar} from './components/Diary/Calendar';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown:false,
}

const SignedInStack = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Homescreen'
            screenOptions={screenOptions}>
        
        </Stack.Navigator>
    </NavigationContainer>
)
}

function Navigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHead />
      <SubHead />
      <ScrollView>
        <SignedInStack>

        </SignedInStack>
      </ScrollView>
      <MainFooter />
    </SafeAreaView>
  );
}

export default Navigation;