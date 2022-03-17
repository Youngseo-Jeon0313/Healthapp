import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet, Alert, Button} from "react-native";

function MainHead() {
    const [text, setText] =useState('운동하고 싶은 부위를 검색하세요! ');
    return (
            <View style={{backgroundColor:'skyblue',flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'NanumMyeongjo-Bold',fontSize:20,color:'#000000',fontWeight:'500'}}>압도적 헬스앱</Text>
                <TextInput 
                style={{height:22, borderColor:'steelblue',  borderWidth: 1,padding:0,margin:0,width:200}}
                onChangeText={newText => setText(newText)}
                defaultValue = {text}/>
                <Button title='검색' mode='outlined' onPress={()=> Alert.alert('검색창에 검색했음!!')}></Button>
            </View>
    );
}


export default MainHead;
