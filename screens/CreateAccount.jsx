import { View, Text,TextInput, StyleSheet, TouchableOpacity,
   ActivityIndicator,
    Modal,
    TouchableWithoutFeedback
   } from 'react-native';
import React from 'react';
import axios from 'axios';
//Icons
import EmailIcon from '../assets/EmailIcon'

//Material


const CreateAccount = ({route,navigation}) => {

  const [emailText,setEmailText] = React.useState('');
  const [isLoading,setIsLoading] = React.useState(false);
  const [modalVisible,setModalVisible] = React.useState(false);


  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);


  const handleNext = async() =>{
    try {
      setIsLoading(true)
      const { data } = await axios.post('http://localhost:8000/users/add-user',{email:emailText})
      setIsLoading(false)

    } catch (err) {
      setIsLoading(false)
      setModalVisible(true)

      
    }

  }


  return (
    <View style={[styles.container,{}]}>
      
      <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      hardwareAccelerated={true}
      >
        <TouchableOpacity  activeOpacity={1} style={styles.modalBrightness}>
          <TouchableOpacity onPress={() =>{setModalVisible(false)}} 
          style={{position:'absolute',width:'100%',height:'100%',}}>

          </TouchableOpacity>
          <View style={styles.modal}>

            <Text style={styles.modalMainText}>This email is already registered</Text>
            <Text style={styles.modalSecondText}>Do you wanna login instead ?</Text>

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.btnText}>Go to login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setModalVisible(false)}} style={styles.modalClose}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>

      </Modal>

      <Text style={styles.mainText}>Enter your Email address.</Text>

      <View style={styles.emailContainer}>
        <View style={styles.emailIconContainer}><EmailIcon width={30} height={30} /></View>
        <TextInput onChangeText={(text)=>{setEmailText(text)}} placeholder='Email address' style={styles.emailInput}/>
       
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
    paddingLeft:60,
    color:"#fff"
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
    backgroundColor:'rgba(0, 0, 0, 0.452)',
    justifyContent:'center',
    alignItems:'center',

    position:'relative',
    zIndex:10
  },
  modal:{
    width:'90%',
    height:300,
    backgroundColor:'#1c1c1c',
    alignItems:'center',
    borderRadius:12,
    paddingTop:40,
    zIndex:20,
    gap:30
  },
  modalMainText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    fontSize:18,
    width:'70%',
    textAlign:'center',
    fontWeight:'bold'
  },
  modalSecondText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
  },
  loginBtn:{
    backgroundColor:'#4ea52f',
    width:170,
    height:50,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
    fontSize:19
  },
  modalClose:{
    padding:20
  },
  modalCloseText:{
    color:'#fff',
    fontFamily:'ProductSans-Medium',
  }


})

export default CreateAccount;