import { View, Text } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Calendar from '../../components/diary/Calendar';
import Write from '../../components/diary/write';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const Diarynavi = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'powderblue'}
    }}>
      <Tab.Screen name="Calendar" component={Calendar} onPress={() => navigation.navigate('Calendar')}/>
      <Tab.Screen name="Write" component={Write} onPress={() => navigation.navigate('Write')}/>
    </Tab.Navigator>
  )
}

export default Diarynavi