import { View, Text,TextInput, StyleSheet, TouchableOpacity,
   ActivityIndicator,
   ScrollView,
   KeyboardAvoidingView,
   Keyboard
   } from 'react-native';
import React from 'react';
import axios from 'axios';
//Icons
import EmailIcon from '../assets/EmailIcon'
import ErrorIcon from '../assets/Error';

//Materials
import Modal from 'react-native-modal';



const CreateAccount = ({route,navigation}) => {

  const [emailText,setEmailText] = React.useState('');
  const [isLoading,setIsLoading] = React.useState(false);
  const [modalVisible,setModalVisible] = React.useState(false);
  const [errorMsg,setErrorMsg] = React.useState('');

  const handleClickOutSide = ()=>{
    setModalVisible(false)
  }


  const handleNext = async() =>{

    let approved = true;

    if(emailText.length === 0)
    {
      setErrorMsg('Email is required');
      return approved = false;
    }
    if(emailText.length < 5 || !emailText.includes('@') || !emailText.endsWith('.com'))
    {
      return setErrorMsg('Please enter a valid email address');
      
    }
   
    
      if(approved)
      {
      setErrorMsg('')
      try {
        Keyboard.dismiss()
        setIsLoading(true)
        const { data } = await axios.post('http://localhost:8000/users/check-user',{email:emailText})
        setIsLoading(false)
        navigation.navigate('FirstLast',{userInfo:{email:emailText}})

      } catch (err) {
        setIsLoading(false)
        setModalVisible(true)
        console.log(err.response.data.msg)        
      }
    }

  }


  return (
    <View style={styles.container}>
        <Modal 
        coverScreen={true}
        style={styles.modalBrightness}
        isVisible={modalVisible} 
        animationIn='pulse'
        animationOut='fadeOut'
        animationOutTiming={100}
        >
          <TouchableOpacity onPress={handleClickOutSide} 
          style={{width:'100%',height:'100%',flex:1}}
          activeOpacity={1}

          >

          </TouchableOpacity>
          <View style={styles.modal}>
            
            <View style={styles.modalTexts}>
              <Text style={styles.modalMainText}>This email is already connected to an account</Text>
              <Text style={styles.modalSecondText}>Do you wannas Log in instead ? </Text>
              
            </View>

            <View style={{alignItems:'center',gap:10}}>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.btnText}>GO TO LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setModalVisible(false)}} style={styles.modalClose}>
                <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>

            </View>

          </View>
      </Modal>
        

      <Text style={styles.mainText}>Enter your Email address.</Text>

      <View style={styles.emailContainer}>
        <View style={{width:"100%",position:'relative',justifyContent:'center'}}>
          <View style={styles.emailIconContainer}><EmailIcon width={30} height={30} /></View>
          <TextInput onSubmitEditing={handleNext} onChangeText={(text)=>{setEmailText(text)}} placeholder='Email address' style={styles.emailInput}/>
      </View>

        { errorMsg.length > 0 &&
        <View style={styles.errorContainer}>
          <View><ErrorIcon width={20} height={20} /></View>
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        </View>
        }

      </View>
      
      

      <View style={styles.nextBtnContainer}> 

          { isLoading ?
        <View style={styles.nextBtn}>
          <Text><ActivityIndicator color={"#fff"} size={25}/></Text>
        </View>
          :
        <TouchableOpacity
         onPress={handleNext}
         style={styles.nextBtn}
         >
             <Text style={styles.nextBtnText}>Next</Text>
         </TouchableOpacity>
        } 
      </View>

     

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    paddingTop:50,
    flexGrow:1,
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
    paddingLeft:50,
    color:"#fff"
  },
  emailIconContainer:{
    position:'absolute',
    left:8,
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
    width:110,
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  nextBtnText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    fontSize:14
  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.282)'
  },
  modalBrightness:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

    position:'relative',
    zIndex:10
  },
  modal:{
    width:'99%',
    height:300,
    backgroundColor:'#1c1c1c',
    alignItems:'center',
    borderRadius:12,
    paddingTop:40,
    zIndex:20,
    gap:50,
    position:'absolute'
  },
  modalMainText:{
    color:'#e3e3e3',
    fontFamily:'ProductSans-Medium',
    fontSize:18,
    width:'70%',
    textAlign:'center',
    fontWeight:'bold'
  },
  modalSecondText:{
    color:'#e3e3e3',
    fontFamily:'ProductSans-Medium',
    fontSize:14
  },
  loginBtn:{
    backgroundColor:'#07571c',
    width:170,
    height:50,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'#e3e3e3',
    fontFamily:'ProductSans-Medium',
    fontSize:17,
    fontWeight:'bold'
  },
  modalClose:{
    padding:10,
  },
  modalCloseText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    fontSize:20

  },
  modalTexts:{
    alignItems:'center',
    width:'100%',
    gap:20
  },
  errorContainer:{
    flexDirection:'row',
    gap:10,
    paddingLeft:6,
    position:'absolute',
    top:60
  },
  errorMsg:{
    color:"#cc3300"
  }


})

export default CreateAccount;