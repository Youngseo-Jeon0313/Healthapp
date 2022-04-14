import { View, Text, TextInput,StyleSheet,Modal,Pressable,ScrollView } from 'react-native'
import React,{useState} from 'react'
import {Calendar} from 'react-native-calendars';

const Calendarpage = () => {

  const [date,setDate]=useState('');
  const [modalVisible,setModalVisible]=useState(false);
  const [Context, setContext]=useState('');
  return (
    <ScrollView>
      <Modal
        animationType = "slide"
        transparent={true}
        visible = {modalVisible}
        onRequestClose = {()=> {
          console.log('Modal 닫힘');
          setModalVisible(!ModalVisible);
        }}>
        <Pressable
        style={styles.box}
        onPress = {()=>setModalVisible(!modalVisible)}>
        <Text>해당날짜 : {date}</Text>
        <TextInput
          multiline
          style={styles.input}
          numberOfLines={8}
          placeholder='오늘 운동을 계획하고 반성해보세요'
          onChangeText={(val)=>setContext(val)}/>
        </Pressable>
      </Modal>
      <Text>날짜를 클릭해 일기를 확인해보세요!</Text>
      <Calendar
        style={styles.customStyle}
        onDayPress={(day)=>{
          setDate(day.dateString)
          setModalVisible(true)
        }
      }/>
        
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  modal:{
    alignItems:'center',

  },
  box:{
    width:350,
    height:350,
    alignItems:'center',
    backgroundColor:'#FFFFE0'
  },
  input:{
    backgroundColor: '#e9e9e9',
    justifyContent:"center",
    width:300,
    height:300,
    margin:10,
    padding:10
  },
  customStyle:{
    currentDayText : {
      color:'blue',
    }
  }

})

export default Calendarpage;