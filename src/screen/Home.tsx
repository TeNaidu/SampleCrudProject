import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Home = () => {
  return (
    <View style={styles.container}>
      <Button title='Add employee' color='rgb(142,143,142)'/>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container :{
    width:200,
    margin:30,
    color:'black'   
  }

})