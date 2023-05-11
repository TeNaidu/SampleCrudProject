import { SafeAreaView, StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const EditDetails = () => {
    const navigation =useNavigation()
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading}> Update Employee</Text>
      <TextInput style={styles.inputText} placeholder='Full Name'/>
      <TextInput style={styles.inputText} placeholder='Salary'/>
      <TextInput style={styles.inputText} placeholder='Age'/>
      <View style = {styles.buttonCon}>
          <View></View>
    <TouchableOpacity style={styles.EditButton} onPress={() => {
        //navigation.navigate('EditDetails')
      }}>
        <Text style ={styles.text} >Update</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  style={styles.DeleteButton}  onPress={() => {
        console.log('delete')
        navigation.goBack();
       // handleDelete(item.id)
       }}>
      <Text style ={styles.text} >Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default EditDetails

const styles = StyleSheet.create({
  container :{
  margin:10,
   color:'black',
 },
 heading :{
  fontSize:16,
  fontWeight:'bold',
  margin:15,
   }, 
   inputText:{
    borderColor:'black',
    borderWidth:1,
    fontSize:20,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    marginBottom:10,
    padding:10,
    borderRadius: 5,
    
   },
   buttonCon :{
    flexDirection: 'row',  // Display items horizontally
    //justifyContent: 'space-between', // Space items evenly
    },
    EditButton :{
      width:100,
      height:40,
      backgroundColor:'rgb(142,143,142)',
      justifyContent:'center',
      alignItems:'center',
      marginRight:15,
      marginLeft:10,
      borderRadius: 5,
      marginTop:5,
    },
    DeleteButton:{
      width:100,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red',
      borderRadius: 5,
      marginTop:5,
    }, text:{
      color:'white',
      fontWeight:'bold',
      fontSize:15,
      padding:5,
       }
})