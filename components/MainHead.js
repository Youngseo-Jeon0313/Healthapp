import React from "react";
import {View, Text, StyleSheet} from "react-native";

function MainHead() {
    return (
        <View style={styles.block}>
            <Text style={styles.appName}>HealthApp</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    block : {
        padding:16,
        backgroundColor: 'white'
    },
    appName: {
        fontSize:22,
        color:'black',
    }
})

export default MainHead;




