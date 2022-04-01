import React from 'react'
import {Text, View, Image, Button, ScrollView} from 'react-native';
import MainFooter from './components/MainFooter'

import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Homenavi from './screens/HomeScreen/homenavi';
import Bodynavi from './screens/BodyScreen/bodynavi';
import Diarynavi from './screens/DiaryScreen/diarynavi'
import Foodnavi from './screens/FoodScreen/foodnavi'
import Exercisenavi from './screens/ExerciseScreen/exercisenavi';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen(){
  const user= auth().currentUser;
  return (
    <>
        <View style={{flex:1}}>
          <Text>{user?.displayName}</Text>
          <Text>{user?.email}</Text>
          <Image source={{ uri: user?.photoURL }} />
          <View>
            <Button title="Logout" onPress={() => auth().signOut()} />
          </View>
        </View>
    <MainFooter/>
    </>  
    );
  }
  
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    

    <NavigationContainer>
    <Tab.Navigator screenOptions ={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle:{backgroundColor:'skyblue'},
      tabBarInactiveTintColor:'#fff',
      tabBarActiveBackgroundColor:'yellow'
    }}>
      <Tab.Screen name="Home" component={Homenavi} options={{
        tabBarIcon: ({color,size}) => {
          <Entypo name="home" color={color} size={size} onPress={() => Navigation.navigate('Home')}/>
        }
      }} />
      <Tab.Screen name="Diary" component={Diarynavi} options={{
        tabBarIcon: ({color, size}) => {
          <Entypo name="open-book" color={color} size={size} onPress={() => Navigation.navigate('Diary')}/>
        }
      }} />
      <Tab.Screen name="Exercise" component={Exercisenavi} options={{
        tabBarIcon: ({color, size}) => {
          <Fontisto name="fire" color={color} size={size} />
        }
      }} />
      <Tab.Screen name="Body" component={Bodynavi} options={{
        tabBarIcon: ({color, size}) => {
          <MaterialCommunityIcons name="folder-heart" color={color} size={size} />
        }
      }} />
      <Tab.Screen name="Food" component={Foodnavi} options={{
        tabBarIcon: ({color, size}) => {
          <Ionicons name="fast-food-outline" color={color} size={size} />
        }
      }} />    
    </Tab.Navigator>
  </NavigationContainer>

  )
}

export default Navigation;