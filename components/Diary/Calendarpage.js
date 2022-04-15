import {Text, TextInput,StyleSheet,Modal,Pressable,ScrollView,Button } from 'react-native';
import {Form} from 'react-native-form-component';
import React,{useState} from 'react'
import {Calendar} from 'react-native-calendars';
import axios from 'axios';
import API_URL from '../../config/constants';

const Calendarpage = () => {

  const [date,setDate]=useState('');
  const [modalVisible,setModalVisible]=useState(false);
  const [description, setdescription]=useState('');

  const handleSubmit = async() => {
      axios
        .post(`${API_URL}/diaries`, {
          date: date,
          description: description,
        })
        .then(values => {
          console.log(values);
        })
        .catch(error => console.log(error));

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
          value={description}
          multiline
          style={styles.input}
          numberOfLines={8}
          placeholder='오늘 운동을 계획하고 반성해보세요'
          onChangeText={(description)=>setdescription(description)}/>
        </Pressable>
        <Button
          onPress={handleSubmit}
          title="Submit!"
          type = "sumbit"
          style={styles.button}/>
        </Form>
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