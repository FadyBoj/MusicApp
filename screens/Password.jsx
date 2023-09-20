import { View, Text, Alert,StyleSheet, ScrollView, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

//Icons
import EyeIcon from '../assets/EyeIcon';
import EyeOffIcon from '../assets/EyeOffIcon';
const Password = ({navigation,route}) => {


  const [showPassword,setShowPassword] = React.useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = React.useState(false);


  const handleShowPassword = ()=>{
    setShowPassword(prevBool => !prevBool);
  }

  const handleShowConfirmPassword = ()=>{
    setShowConfirmPassword(prevBool => !prevBool);
  }


  return (
    <ScrollView contentContainerStyle={styles.container} >



      <View style={styles.inputContainer}> 
      
        <Text style={styles.mainText}>Create a Password</Text>
          <View style={{justifyContent:'center'}}> 
            <TextInput  secureTextEntry={!showPassword} style={styles.input} />
            <TouchableOpacity onPress={handleShowPassword} style={styles.eyeContainer}>
              { showPassword ?
              <EyeOffIcon width={25} height={25} />:
              <EyeIcon width={25} height={25} />
              }
              </TouchableOpacity>

          </View>
        <Text style={styles.warning}>Use at least 8 characters</Text>

      </View>

      <View style={styles.inputContainer}> 
      
        <Text style={styles.mainText}>Confirm Your Password</Text>
          <View style={{justifyContent:'center'}}>
            <TextInput  secureTextEntry={!showConfirmPassword} style={styles.input} />
            <TouchableOpacity onPress={handleShowConfirmPassword} style={styles.eyeContainer}>
              { showConfirmPassword ?
              <EyeOffIcon width={25} height={25} />:
              <EyeIcon width={25} height={25} />
              }
              </TouchableOpacity>

          </View>
        <Text style={styles.warning}>Make sure your password is correct</Text>

    </View>

    <View style={styles.navBtnsContainer}>

        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.navBtn}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn}>
          <Text>Create Account</Text>
        </TouchableOpacity>
    </View>

      


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#000",
    flexGrow:1,
    width:'100%',
    alignItems:'center',
    paddingTop:50,
    gap:40
  },
  mainText:{
    color:"#fff",
    fontSize:24,
    fontWeight:'700',
    fontFamily:'ProductSans-Medium',
    width:'90%',
    paddingLeft:10,

  },
  inputContainer:{
    width:'90%',
    borderWidth:2,
    gap:14,
    position:'relative',
    justifyContent:'center'
  },
  input:{
    width:'100%',
    backgroundColor:'#141414',
    paddingLeft:2,
    paddingLeft:20,
    paddingRight:50
  },
  warning:{
    paddingLeft:13,
    width:'90%'
  },
  eyeContainer:{
    position:'absolute',
    right:0,
    padding:20,
    height:'80%',
    justifyContent:'center'
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

export default Password