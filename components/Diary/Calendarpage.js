import {Text, TextInput,StyleSheet,Modal,Pressable,ScrollView,Button } from 'react-native';
import {Form} from 'react-native-form-component';
import React,{useState} from 'react'
import {Calendar} from 'react-native-calendars';
import axios from 'axios';
import moment from 'moment';
import API_URL from '../../config/constants';

export function changeFormat(date) {
  if (moment(date).isValid()) {
    return moment(date).format('YYYY-MM-DD');
  } else {
    return '2022-04-21';
  }
}

const Calendarpage = () => {

  const [date,setDate]=useState('');
  const [modalVisible,setModalVisible]=useState(false);
  const [description, setdescription]=useState('');

  const handleSubmit =async() => {
    try{
      const resp = await axios.post('http://10.0.2.2:8080/diary',
      {
        "date":date,
        "description":description
      });
      console.log(resp.data);
      resp.errorBody().string()
    } catch(err) {
      console.log(err)
    }

      }

  return (
    <ScrollView>
      <Modal
        animationType = "slide"
        transparent={true}
        visible = {modalVisible}
        onRequestClose = {()=> {
          console.log('Modal 닫힘');
          setModalVisible(!modalVisible);
        }}>
          <Form onSubmit = {handleSubmit}>
        <Pressable
        style={styles.box}
        onPress = {()=>setModalVisible(!modalVisible)}>
        <Text 
        value={date}>해당날짜 : {date}</Text>
        <TextInput
          multiline
          style={styles.input}
          numberOfLines={8}
          placeholder='오늘 운동을 계획하고 반성해보세요'
          onChangeText={(description)=>setdescription(description)}
          value={description}
          />
        </Pressable>
        </Form>
        <Button
          onPress={handleSubmit}
          title="Submit!"
          style={styles.button}/>
      </Modal>
      <Text>날짜를 클릭해 일기를 확인해보세요!</Text>
      <Calendar
        style={styles.customStyle}
        // blurRadius={this.modalVisible ? 4: 0}
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