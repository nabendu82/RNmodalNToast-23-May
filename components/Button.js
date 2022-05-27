import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 12,
        padding: 12,
        backgroundColor: 'darkmagenta',
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Button