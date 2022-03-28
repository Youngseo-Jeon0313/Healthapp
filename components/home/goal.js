import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Modal, Portal, Button, Provider} from 'react-native-paper'
const goal = () => {
    const [visible, setVisible] =useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20}
//1:03:47
  return (
      <>
    <Provider>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text>
                    목표:-10kg 
                    D-Day:89일 
                    현재진행상황: -3kg
                </Text>
            </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
            D-day:89일
        </Button>
    </Provider>
    </>
  )
}

export default goal;