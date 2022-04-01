import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const MainFooter = () => {
  return (
    <View style={{posiion:'absolute',flexDirection:'row',height:30,justifyContent:'space-around',alignContent:'center',alignItems:'center',backgroundColor: 'powderblue'}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')} >
          </TouchableOpacity> 
          <TouchableOpacity  onPress={() => navigation.navigate('Diary')}>
            <Text style={styles.banner}>다이어리</Text>
          </TouchableOpacity> 
          <TouchableOpacity  onPress={() => navigation.navigate('Exercise')}>
            <Text style={styles.banner}>운동하기</Text>
          </TouchableOpacity>   
          <TouchableOpacity  onPress={() => navigation.navigate('Body')}>
            <Text style={styles.banner}>눈바디</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Food')}>
            <Text style={styles.banner}>식단기록</Text>
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

export default MainFooter