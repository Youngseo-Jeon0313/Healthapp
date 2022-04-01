import { View, Text } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import Hearts from '../../components/exercise/hearts';
import Learn from '../../components/exercise/learn';
import Search from '../../components/exercise/search';
import Timer from '../../components/exercise/timer';
import Tools from '../../components/exercise/tools';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



const SubHead = ({navigation}) => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Hearts" component={Hearts} onPress={() => navigation.navigate('Hearts')}/>
      <Tab.Screen name="Learn" component={Learn} onPress={() => navigation.navigate('Learn')}/>
      <Tab.Screen name="Search" component={Search} onPress={() => navigation.navigate('Search')}/>
      <Tab.Screen name="Timer" component={Timer} onPress={() => navigation.navigate('Timer')}/>
      <Tab.Screen name="Tools" component={Tools} onPress={() => navigation.navigate('Tools')}/>
    </Tab.Navigator>
    
  )
}
const Exercisenavi = ({}) => {
  return (
    <View>
      <MainHead/>
      <SubHead/>
      <Text>exercisenavi</Text>
    </View>
  )
}

export default Exercisenavi