import 'react-native-gesture-handler';
import React from 'react'
import { View , Text, TouchableOpacity, AppRegistry } from 'react-native';
import { CardStyleInterpolators, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme,useNavigation } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';


//screens
import CheckSigned from './screens/CheckSigned';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import FirstLast from './screens/FirstLast';
import EnterPassword from './screens/Password';
import MainPage from './screens/MainPage';
import Search from './screens/Search'
import Library from './screens/Library';
import Song from './screens/Song';
//Icons
import LeftArrow from './assets/LeftArrow';

//components
import MyTabBar from './components/TabBar';


const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



//Account stack 

const CreateAccountStack = () => {
  return (
    <Stack.Navigator
     screenOptions={{
      headerShown:false,
      ...TransitionPresets.SlideFromRightIOS,
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
      presentation:'modal',
        transitionSpec:{
          open:TransitionSpecs.TransitionIOSSpec,
          close:TransitionSpecs.BottomSheetSlideInSpec
        },
     }}
    >
      <Stack.Screen  name="CreateAccount" component={CreateAccount} />
      
      <Stack.Screen 
      name="FirstLast"
      component={FirstLast}
      
       />

      <Stack.Screen name="Password" component={EnterPassword} />
    </Stack.Navigator>
  );
};

//Actual app tabs


const MainTabs = ()=>{
  const [tabBarVisible,setTabBarVisible] = React.useState(true);

  return(
  <Tab.Navigator
    backBehavior='history'
    tabBar={props => <MyTabBar {...props} 
    tabBarVisible={tabBarVisible}
     />}
  
    >

      <Tab.Screen 
      options={{headerShown:false}}
      name='Home'
      component={MainPage}
      initialParams={{setTabBarVisible}}
           />

      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Library' component={Library} />

    </Tab.Navigator>
  )
}




const AppTabs = ()=>{
  return(
    
    <NativeStack.Navigator
    >

    <Stack.Screen
    name='mainTabs'
    component={MainTabs}
    options={{headerShown:false}}
    />

    <Stack.Screen
    name='song'
    
    component={Song}
    options={{
      animationTypeForReplace: 'push',
      headerTitleAlign:'center',
      headerTitle:"Now Playing",
      headerStyle:{backgroundColor:'#0b0f20'},
      animation:'fade',
      headerShadowVisible:false
  
    }}


    />

    </NativeStack.Navigator>
  )
}

  


const App = () =>{
  
  return(
    <NavigationContainer theme={DarkTheme}  >

      {/* Home Screen */}

      <Stack.Navigator
        screenOptions={{
          headerMode:'screen'
        }}
      >
        <Stack.Screen 
        name="checkSigned" 
        component={CheckSigned}
        options={{
          headerShown:false
        }}
         />

      <Stack.Screen 
        name="index" 
        component={Home}
        options={{
          headerShown:false
        }}
         />

        <Stack.Screen 
        name="App" 
        component={AppTabs}
        options={{
        headerShown:false
        }}
         />


      <Stack.Screen 
      name="AccountCreationScreen" 
      component={CreateAccountStack}
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
          open:TransitionSpecs.TransitionIOSSpec,
          close:TransitionSpecs.FadeOutToBottomAndroidSpec
        }
       })}
       
      />  
      
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App