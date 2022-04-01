import { View, Text} from 'react-native'
import React from 'react'
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const Login = (props) => {

  return (
    <View>
      <Text>Login</Text>
      <GoogleSigninButton onPress={props.onGoogleButtonPress}/>
    </View>
  )
}

export default Login