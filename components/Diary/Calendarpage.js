import {Text,View, TextInput,StyleSheet,Modal,ScrollView,Button } from 'react-native';
import {Form} from 'react-native-form-component';
import React,{useState} from 'react'
import {Calendar} from 'react-native-calendars';
import axios from 'axios';


const Calendarpage = () => {

  const [date,setDate]=useState('');
  const [modalVisible,setModalVisible]=useState(false);
  const [description, setdescription]=useState('');

  const HandleSubmit =async() => {
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
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal 닫힘');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={styles.box}
            onPress={() => setModalVisible(!modalVisible)}>
            <Form buttonText="" buttonStyle={{width: 0}}>
              <Text value={date}>해당날짜 : {date}</Text>
              <TextInput
                multiline
                style={styles.input}
                numberOfLines={8}
                placeholder="오늘 운동을 계획하고 반성해보세요"
                onChangeText={description => setdescription(description)}
                value={description}
              />
              <Button
                onPressButton={HandleSubmit}
                title="일기전송"
                color="#2c2c2c"
              />
              <Button title="삭제" disabled color="#2c2c2c" />
            </Form>
          </View>
        </Modal>
      </View>
      <View>
        <Text>날짜를 클릭해 일기를 확인해보세요!</Text>
        <Calendar
          style={styles.customStyle}
          // blurRadius={this.modalVisible ? 4: 0}
          onDayPress={day => {
            setDate(day.dateString);
            setModalVisible(true);
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  modal:{
    marginTop:20,
    alignItems:'center',
    justifyContent:"center",
  },
  box:{
    width:350,
    height:330,
    alignItems:'center',
    backgroundColor:'#FFFFE0'
  },
  input:{
    backgroundColor: '#e9e9e9',
    justifyContent:"center",
    width:300,
    height:200,
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