import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import MainHead from './components/MainHead';
import SubHead from './components/SubHead';
import MainFooter from './components/MainFooter';

function App(){
return (

    <SafeAreaView>
      <MainHead/>
      <SubHead/>
      <ScrollView>
        <Text>
          사과
          당근
          참외
          메론
          게임
        </Text>
      </ScrollView>
      <MainFooter/>
    </SafeAreaView>
  );

}


export default App;
