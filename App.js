import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import ToastMessages from './components/ToastMessages'
import Toast from './components/Toast'
// import ModalComp from './components/ModalComp'

const App = () => {
  return (
    <>
      <Toast />    
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <ModalComp /> */}
          <ToastMessages />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'lightblue'
  }
})

export default App