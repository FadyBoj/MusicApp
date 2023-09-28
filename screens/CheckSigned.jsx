import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckSigned = ({ navigation }) => {




    const getData = async () =>{
        try {
          const myValue = await AsyncStorage.getItem('user');
          if(myValue === null)
          {
            navigation.navigate('index')

          }
          else{
            console.log(JSON.parse(myValue).name)
            navigation.navigate('App')
          }
    
        } catch (error) {
          console.log("Error")
        }
      }
    
      getData() 

  return (
    <View>
      <Text style={{flex:1,backgroundColor:'#000'}}></Text>
    </View>
  )
}

export default CheckSigned