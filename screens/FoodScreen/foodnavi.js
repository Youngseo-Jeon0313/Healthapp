import { View, Text } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Calorie from '../../components/food/calorie';
import Food from '../../components/food/food';
import Gallery from '../../components/food/gallery';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



const SubHead = ({navigation}) => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Calorie" component={Calorie} onPress={() => navigation.navigate('Calorie')}/>
      <Tab.Screen name="Food" component={Food} onPress={() => navigation.navigate('Food')}/>
      <Tab.Screen name="Gallery" component={Gallery} onPress={() => navigation.navigate('Gallery')}/>
    </Tab.Navigator>
    
  )
}
const Foodnavi = ({}) => {
  return (
    <View>
      <MainHead/>
      <SubHead/>
      <Text>foodnavi</Text>
    </View>
  )
}

export default Foodnavi