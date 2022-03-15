import { View,Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const SubHead = () => {
  return (
    <View style={{flexDirection:'row',height:30,justifyContent:'space-around',alignContent:'center',alignItems:'center'}}>
            <Text style={styles.banner}>다이어리</Text>
            <Text style={styles.banner}>눈바디</Text>
            <Text style={styles.banner}>식단기록</Text>
            <Text style={styles.banner}>운동하기</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    banner : {
        paddingLeft:16,
        backgroundColor: 'powderblue',
        fontWeight:'100'
    },
})
export default SubHead;