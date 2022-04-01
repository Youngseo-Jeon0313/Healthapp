import React,{useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Login from './screens/LoginScreen/Login'
import Navigation from './Navigation'

const App = () => {

useEffect(() => {
    GoogleSignin.configure({
        webClientId:
        '871462142530-ijgocrjkfs1vjocnsldnvko4vnpto61b.apps.googleusercontent.com'
    })
},[]);

useEffect(()=>{
    const unsubscribe = auth().onAuthStateChanged((user) => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });
    return () => unsubscribe();
},[])


const [loggedIn, setLoggedIn] = useState(false);


async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}


if (loggedIn) {
    return <Navigation />;
}

return <Login onGoogleButtonPress={onGoogleButtonPress} />;

}


export default App;