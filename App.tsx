import 'react-native-gesture-handler';
import react from 'react'
import { View , Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
//screens
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';

import createAccountHeader from './components/CreateAccountHeader';

const Stack = createStackNavigator();

const App = () =>{


  return(
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown:false
        }}
         />

        <Stack.Screen
         name="CreateAccount"
         component={CreateAccount}
         options={{
          ...TransitionPresets.SlideFromRightIOS,
          header:createAccountHeader
         }}
         
           />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App