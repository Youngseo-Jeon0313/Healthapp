import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'




const SubHead = () => {
  const [activeTab, setActiveTab] =useState('Home')

  return (
    <View style={{flexDirection:'row',height:30,justifyContent:'space-around',alignContent:'center',alignItems:'center',backgroundColor: 'powderblue'}}>
          <TouchableOpacity onPress={() => setActiveTab('diary')}>
            <Text style={styles.banner}>Mine</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => setActiveTab('bodyseeing')}>
            <Text style={styles.banner}>오늘의 운동</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => setActiveTab('food')}>
            <Text style={styles.banner}>광고</Text>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => setActiveTab('exercise')}>
            <Text style={styles.banner}>찜</Text>
          </TouchableOpacity>   
    </View>
  )
}

const styles = StyleSheet.create({
    banner : {
        paddingLeft:16,
        fontWeight:'100'
    },
})
export default SubHead;