import { View,Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const SubHead = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <Text style={styles.banner}>다이어리</Text>
            <Text style={styles.banner}>눈바디</Text>
            <Text style={styles.banner}>식단기록</Text>
            <Text style={styles.banner}>운동하기</Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    banner : {
        paddingLeft:16,
        backgroundColor: 'white'
    },
})
export default SubHead;