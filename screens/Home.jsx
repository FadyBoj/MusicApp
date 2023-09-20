import { View,
        Text,
        TouchableOpacity,
        TouchableHighlight,
        Animated,
        Image,
        TextInput,
        ScrollView,
        FlatList,Key
     } from 'react-native'

import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
//Logo
import Logo from '../assets/logo'

//Icons
import UserIcon  from '../assets/user';

//Google
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

//Styles
import styles from '../styles/indexStyles';


const Home = ({}) => {
  const navigation = useNavigation()

  GoogleSignin.configure({
    iosClientId:'66441546360-mf57conc6939aulbovqqlupi6nqrahiv.apps.googleusercontent.com',
    androidClientId:"66441546360-7fdvvdvd2jr9b83i9haep7pknupoutql.apps.googleusercontent.com"
  })

  const handleGoogleSignIn = async()=>{
    try {
      const checkPlayServices = await GoogleSignin.hasPlayServices();
      if(checkPlayServices)
      {
        const userInfo = await GoogleSignin.signIn();
        
        console.log(userInfo)
      }
    } catch (error) {
      console.log(error)
    }
    
  }


  //Handle button animation
  const [createClicked,setCreateClicked] = React.useState(false);
  const [animatedScale,setAnimatedScale] = React.useState(new Animated.Value(300))

  React.useEffect(() => {
    Animated.timing(
        animatedScale,
        {
          toValue: createClicked ? 0.95 : 1,
          duration:50,
          useNativeDriver: false,
        }
      ).start();
    },[createClicked])



  return (
    <ScrollView contentContainerStyle={styles.container}>

      <LinearGradient 
      colors={['#434343','#000000']}
      style={styles.linear}
      locations={[0,0.6]}
      >
      </LinearGradient>

      <View style={styles.logo}> 
        <Logo width={230} height={100} /> 
        </View>
      <View style={styles.mainTitleCont}>
        <Text style={styles.mainTitle}>Millions of songs.</Text>
        <Text style={styles.mainTitle}><Text style={{color:'#1CB5E0'}}>Free</Text> forever.</Text>
      </View>

      <View style={styles.emailLoginContainer}>

        <Text style={styles.emailLoginText}>Log in to Megnwene</Text>
        
        <View style={{position:'relative',justifyContent:'center',width:'100%',alignItems:'center'}}>
          <TextInput placeholder='Enter your Email address' style={styles.emailLoginInput} />
          <UserIcon style={styles.userIcon} width={20} height={20} />
        </View>

        <Animated.View>
          <TouchableHighlight style={styles.emailContinue}>
            <Text style={styles.emailContinueText}>Continue With Email</Text>
          </TouchableHighlight>
        </Animated.View>
    
      </View>

      <View style={styles.space}>
          <View style={styles.firstSpace}></View>
          <View style={styles.or}><Text>or</Text></View>
          <View style={styles.secondSpace}></View>
      </View>

      <View style={styles.btns}>

        <Animated.View  style={{width:300,height:50,transform:[{scale:animatedScale}]}}>
          <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#097d9e"
            onPressIn={()=>{setCreateClicked(true)}}
            onPressOut={()=>{setCreateClicked(false)}} 
            onPress={()=>{navigation.navigate('AccountCreationScreen')}}
            style={styles.createAccountBtn}>
            <Text style={styles.createAccountText}>Sign up free</Text>

          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{width:300,height:50,transform:[{scale:1}]}}>
          <TouchableHighlight onPress={handleGoogleSignIn} style={styles.googleBtn}>

            <View style={styles.googleBtnContent}>
            <Image style={styles.googleIcon} source={require('../assets/google.png')}/>
            <Text style={styles.googleBtnText}>Continue With Google</Text>
            </View>
          </TouchableHighlight>
          </Animated.View>

      </View>


    </ScrollView>
  )
}

export default Home