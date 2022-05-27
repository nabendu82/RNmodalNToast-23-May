import { StyleSheet, Text, Modal, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const ModalComp = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <Image style={styles.image} source={require('../assets/unsplash.jpg')} />
                <Text style={styles.text}>
                    React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. 
                </Text>
                <Text style={styles.closeText} onPress={() => setModalVisible(!modalVisible)}>Close</Text>
            </Modal>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>About React Native</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'darkmagenta'
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    image: {
        marginTop: 150,
        marginBottom: 30,
        width: '100%',
        height: 350
    },
    text: {
        fontSize: 18,
        marginBottom: 30,
        padding: 20,
    },
    closeText: {
        fontSize: 24,
        color: 'darkred',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default ModalComp