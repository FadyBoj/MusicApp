import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
//Icons
import EmailIcon from '../assets/EmailIcon'
import { useNavigation } from '@react-navigation/native';

const CreateAccount = ({route}) => {

  const navigation = useNavigation()

  const handleNext = () =>{
    navigation.navigate('FirstLast');

  }


  return (
    <View style={styles.container}>

      <Text style={styles.mainText}>Enter your Email address.</Text>

      <View style={styles.emailContainer}>
        <View style={styles.emailIconContainer}><EmailIcon width={30} height={30} /></View>
        <TextInput placeholder='Email address' style={styles.emailInput}/>
      </View>

      <View style={styles.nextBtnContainer}> 
        <TouchableOpacity
         onPress={handleNext}
         style={styles.nextBtn}
         >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    paddingTop:50,
    flex:1,
    backgroundColor:'#000',
    width:"100%",
    gap:20
  },
  mainText:{
    color:"#fff",
    fontSize:24,
    fontWeight:'700',
    fontFamily:'ProductSans-Medium',

  },
  emailContainer:{
    width:'90%',
    position:'relative',
    justifyContent:'center'
  },
  emailInput:{
    borderWidth:2,
    width:'100%',
    backgroundColor:'#141414',
    paddingLeft:60
  },
  emailIconContainer:{
    position:'absolute',
    left:20,
    zIndex:10
  },
  nextBtnContainer:{
    alignItems:'flex-end',
    width:"100%",
    paddingRight:30,
    marginTop:23
  },
  nextBtn:{
    borderColor:'#303030',
    borderWidth:1,
    padding:15,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:20
  },
  nextBtnText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    fontSize:14
  }

})

export default CreateAccount