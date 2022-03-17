import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import MainFooter from './components/MainFooter';
import {Goals} from '../data/goal';

function App(){
return (
    <SafeAreaView style={{flex:1}}>
      <MainHead/>
        <SubHead/>
        <ScrollView>
        
        </ScrollView>
      <MainFooter/>
    </SafeAreaView>
  );

}


export default App;
