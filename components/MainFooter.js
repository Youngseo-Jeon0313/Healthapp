import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const MainFooter = () => {
  return (
    <View style={{posiion:'absolute',flexDirection:'row',height:30,justifyContent:'space-around',alignContent:'center',alignItems:'center',backgroundColor: 'powderblue'}}>
          <TouchableOpacity >
            <Text style={styles.banner}>홈</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.banner}>다이어리</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.banner}>운동하기</Text>
          </TouchableOpacity>   
          <TouchableOpacity >
            <Text style={styles.banner}>눈바디</Text>
          </TouchableOpacity>
          <TouchableOpacity >
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