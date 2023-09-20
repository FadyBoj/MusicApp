import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const FirstLast = ({navigation}) => {


  const handleNext = () =>{
    navigation.navigate('Password');
  }



  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.container}>
      
      <View style={styles.inputContainer}> 

        <Text style={styles.inputText}>First name</Text>
        <TextInput style={styles.input} />
        <Text>Use at least 4 characters</Text>

      </View>

      <View style={styles.inputContainer}> 

        <Text style={styles.inputText}>Last name</Text>
        <TextInput  style={styles.input} />
        <Text>Use at least 4 characters</Text>
        
      </View>

      <View style={styles.navBtnsContainer}>

        <TouchableOpacity onPress={() =>{navigation.goBack()}} style={styles.navBtn}>
          <Text style={{color:'#fff'}}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.navBtn}>
          <Text style={{color:'#fff'}}>Next</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    backgroundColor:'#000',
    flexGrow:1,
    alignItems:'center',
    width:'100%',
    gap:40
  },
  inputContainer:{
    width:'90%',
    borderWidth:2,
    gap:10
  },
  input:{
    width:'100%',
    backgroundColor:'#141414',
    paddingLeft:2,
    paddingLeft:20
  },
  inputText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    paddingLeft:8,
    fontSize:18
  },
  navBtnsContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30,
    paddingRight:30
  },
  navBtn:{
    borderColor:'#303030',
    borderWidth:1,
    padding:15,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:20
  },
})

export default FirstLast