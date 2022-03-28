import React from 'react';
import {ScrollView} from 'react-native';
import MainFooter from './components/MainFooter'
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function HomeScreen(){
return (
  <>
  <MainHead/>
  <SubHead/>
  <ScrollView></ScrollView>
  <MainFooter/>
  </>  
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;