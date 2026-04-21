import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To do app</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  text:{
    color:'Black',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
  }
})