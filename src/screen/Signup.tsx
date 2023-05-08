import { 
     StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Signup = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Let's get started!</Text>
      <TextInput style={styles.inputText} placeholder='Display Name'/>
    <TextInput style={styles.inputText} placeholder='Email'/>
    <TextInput style={styles.inputText} placeholder='Password'/>
    <View style = {styles.buttonCon}>
    <TouchableOpacity style={styles.button} onPress={() => {
        // Button press handler
      }}>
        <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {
        // Button press handler
      }}>
        <Text style={styles.arrow}><Icon name='arrow-back-sharp' color='black' size={25} /></Text>
      </TouchableOpacity>
      </View>
   </View> 
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
         justifyContent:'center',
        // alignItems:'center',
       },
       text:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30,
        color:'black'
       },
       inputText:{
        borderColor:'black',
        borderWidth:1,
        fontSize:20,
        marginLeft:50,
        marginRight:50,
        marginTop:15,
        marginBottom:20,
        padding:10,
       },
       buttonCon:{
        alignItems:'center',
        justifyContent:'center',
       },
       button: {
        padding: 10,
        paddingLeft:80,
        paddingRight:80,
        backgroundColor: 'blue',
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:'bold',
      },
      arrow:{
        marginTop:20,
       
      }
})