import React from 'react'
import {Text, View, Image, Button, ScrollView} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Homenavi from './screens/HomeScreen/homenavi';
import Bodynavi from './screens/BodyScreen/bodynavi';
import Diarynavi from './screens/DiaryScreen/diarynavi'
import Foodnavi from './screens/FoodScreen/foodnavi'
import Exercisenavi from './screens/ExerciseScreen/exercisenavi';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

    </>  
    );
  }
  
const Tab = createBottomTabNavigator();

const Navigation = ({navigation}) => {
  return (
    <NavigationContainer>
    <Tab.Navigator 
     screenOptions = {
       ({route})=> ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Home'){
          iconName=focused
          ? 'home-sharp'
          : 'home-outline';
      }else if (route.name==="Diary"){
        iconName=focused
        ?  'folder-open'
        :  'folder-open-outline'
      }else if (route.name==="Exercise"){
        iconName=focused
        ?  'flame'
        : 'flame-outline'
      }else if (route.name==="Body"){
        iconName=focused
        ?  'body'
        :  'body-outline'
      }else if (route.name==="Food"){
        iconName=focused
        ? 'fast-food'
        : 'fast-food-outline'
      }
          return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      
      
    })}
    >
      <Tab.Screen options={{headerShown:false}}name="Home" children={Homenavi} onPress={() => navigation.navigate('Home')}/>
      <Tab.Screen options={{headerShown:false}}name="Diary" component={Diarynavi} onPress={() => navigation.navigate('Diary')}/>
      <Tab.Screen options={{headerShown:false}}name="Exercise" component={Exercisenavi} onPress={() => navigation.navigate('Exercise')}/>
      <Tab.Screen options={{headerShown:false}}name="Body" component={Bodynavi} onPress={() => navigation.navigate('Body')} />
      <Tab.Screen options={{headerShown:false}}name="Food" component={Foodnavi} onPress={() => navigation.navigate('Food')} />   
    </Tab.Navigator>
  </NavigationContainer>

  )
}

export default Navigation;