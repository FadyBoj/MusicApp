import 'react-native-gesture-handler';
import react from 'react'
import { View , Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
//screens
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import FirstLast from './screens/FirstLast';
//Icons
import LeftArrow from './assets/LeftArrow';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function AccountCreationScreen(){
  return (
    <Tab.Navigator tabBar={()=> null}  screenOptions={{swipeEnabled:false}}  >
      <Tab.Screen   name="CreateAccount" component={CreateAccount} />
      <Tab.Screen name="FirstLast" component={FirstLast} />
    </Tab.Navigator>
  );
}


const App = () =>{

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  

  return(
    <NavigationContainer>

      {/* Home Screen */}

      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown:false
        }}
         />

        {/* Create Account Screen */}

      <Stack.Screen 
      name="AccountCreationScreen" 
      component={AccountCreationScreen}
      options={({ navigation })=>({
        headerTitleAlign:'center',
        headerShadowVisible:false,
        headerStyle:{backgroundColor:'#000'},
      
        headerTitle:()=>(
        <Text style={{color:'#fff',fontSize:18,fontFamily:'ProductSans-Medium'}}>Create Account</Text>
        ),
      
        headerLeft:()=>(
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <View style={{marginLeft:24,paddingTop:20,paddingBottom:20}}>
              <LeftArrow width={20} height={20}/>
            </View>
          </TouchableOpacity>
        ),


        ...TransitionPresets.SlideFromRightIOS,
        transitionSpec:{
          open:config,
          close:{animation:'spring',config:{
            stiffness: 100,
            damping: 1,
            mass: 1,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          }}
        }
       })}
       
      />  
      
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App