import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import MainFooter from './components/MainFooter';
import {Goals} from '../data/goal';
import {NavigationContainer} from '@react-navigation/native';
function App(){
return (
  <NavigationContainer>
    <SafeAreaView style={{flex:1}}>
      <MainHead/>
        <SubHead/>
        <ScrollView>
        
        </ScrollView>
      <MainFooter/>
    </SafeAreaView>
    </NavigationContainer>
  );

}


export default App;
