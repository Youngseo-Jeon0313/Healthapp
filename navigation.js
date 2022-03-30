import React from 'react'
import {Text, View, Image, Button, ScrollView} from 'react-native';
import MainFooter from './components/MainFooter'
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';



function HomeScreen(){
  const user= auth().currentUser;
  return (
    <>
    <MainHead/>
      <SubHead/>
        <ScrollView>
        <View>
          <Text>{user?.displayName}</Text>
          <Text>{user?.email}</Text>
          <Image source={{ uri: user?.photoURL }} />
          <View>
            <Button title="Logout" onPress={() => auth().signOut()} />
          </View>
        </View>
        </ScrollView>
    <MainFooter/>
    </>  
    );
  }
  
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation;


  
