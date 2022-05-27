import { StyleSheet, Text, View, DeviceEventEmitter, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef }  from 'react'

const colors = { info: '#00bfff', success: '#00ff00', danger: '#ff0000' }

const Toast = () => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [timeOut, setTimeOut] = useState(4000);
    const timeOutRef = useRef(null);

    useEffect(() => {
        DeviceEventEmitter.addListener('SHOW_TOAST', onNewToast);
        return () => {
            DeviceEventEmitter.removeAllListeners();
        }
    },[])

    const closeToast = () => {
        setMessage(null);
        setTimeOut(4000);
        clearInterval(timeOutRef.current);
    }

    useEffect(() => {
        if(message){
            timeOutRef.current = setInterval(() => {
                if(timeOut === 0) closeToast();
                else setTimeOut(prevState => prevState - 1000);
            }, 1000)
        }

        return () => {
            clearInterval(timeOutRef.current);
        }

    }, [message, timeOut])

    const onNewToast = data => {
        setMessage(data.message);
        setMessageType(data.type);
    }

    return (
        <View style={[{ backgroundColor: colors[messageType]}, styles.toastContainer]}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>{message}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toastContainer: { position: 'absolute', bottom: '6%', left: '4%', right: '4%', zIndex: 1 },
    textStyle: { padding: 14, color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}
})

export default Toast