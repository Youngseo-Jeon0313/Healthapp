import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import MainHead from '../../components/MainHead';
import SubHead from '../../components/SubHead';
const Homenavi = () => {
  return (
    <View>
     <MainHead/>
     <SubHead/>
     <ScrollView>
       <Text>homenavi</Text>
     </ScrollView>
    </View>
  )
}

export default Homenavi