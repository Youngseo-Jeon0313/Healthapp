import { View, Text } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Calendar from '../../components/diary/Calendar';
import Write from '../../components/diary/write';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



const SubHead = ({navigation}) => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={Calendar} onPress={() => navigation.navigate('Calendar')}/>
      <Tab.Screen name="Write" component={Write} onPress={() => navigation.navigate('Write')}/>
    </Tab.Navigator>
    
  )
}
const Diarynavi = ({navigation}) => {
  return (
    <View>
      <MainHead/>
      <SubHead/>
      <Text>diarynavi</Text>
    </View>
  )
}

export default Diarynavi