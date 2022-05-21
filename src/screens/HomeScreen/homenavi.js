import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Deco from '../../components/home/deco';
import Goal from '../../components/home/goal';
import Quotes from '../../components/home/quotes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Homenavi = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Deco'
    screenOptions={{
        tabBarLabelStyle:{fontSize:12},
        tabBarStyle:{backgroundColor:'powderblue'}
      }}
    >
      <Tab.Screen options={{headerShown:false}} name="Deco" component={Deco} onPress={() => navigation.navigate('Deco')}/>
      <Tab.Screen options={{headerShown:false}} name="Goal" component={Goal} onPress={() => navigation.navigate('Goal')}/>
      <Tab.Screen options={{headerShown:false}} name="Quotes" component={Quotes} onPress={() => navigation.navigate('Quotes')}/>
    </Tab.Navigator>
  )
}

export default Homenavi