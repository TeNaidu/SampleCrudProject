import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text><Icon name='home' size={50}/></Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center'   
  }

})