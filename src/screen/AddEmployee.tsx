import { SafeAreaView, StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const AddEmployee = () => {

    const callApiData = async()=>{
        fetch('https://dummy.restapiexample.com/api/v1/create',{
    method: 'POST',
    body: JSON.stringify(employee),
    headers: {
   'Content-Type': 'application/json' 
    }},);
         
      }
    const navigation =useNavigation()

    interface Employee {
          fullName: string;
          salary: string;
          age: string;
        }

    const [employee, setEmployee] = useState({
        fullName: '',
         salary: '',
         age: '',
        });
console.log('EmployeeDetails', employee)
    const handleChangeText = (field: keyof Employee, value: string) => {
        setEmployee((prevEmployee) => ({
         ...prevEmployee,
        [field]: value,
         }));
         };

         const handleAddEmployee = () => {
             console.log('Full Name:', employee.fullName);
            console.log('Salary:', employee.salary);
        console.log('Age:', employee.age);
        callApiData();
            
         navigation.goBack();
              };
            
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading}> Add New Employee</Text>
      <TextInput style={styles.inputText} placeholder='Full Name'
    value={employee.fullName}
     onChangeText={(value) => handleChangeText('fullName', value)}
      />
      <TextInput style={styles.inputText} placeholder='Salary'
      value={employee.salary}
       onChangeText={(value) => handleChangeText('salary', value)}
      />
      <TextInput style={styles.inputText} placeholder='Age' 
        value={employee.age}
        onChangeText={(value) => handleChangeText('age', value)}
        keyboardType="numeric"
      /> 
      <View style = {styles.buttonCon}>
          <View></View>
    <TouchableOpacity style={styles.EditButton} onPress={handleAddEmployee
        //navigation.navigate('EditDetails')
      }>
        <Text style ={styles.text} >Submit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  style={styles.DeleteButton}  onPress={() => {
        console.log('delete')
       navigation.goBack();
       }}>
      <Text style ={styles.text} >Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default AddEmployee

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