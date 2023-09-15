/* eslint-disable prettier/prettier */
import React from 'react';
import SignUp from './pages/SignUp';
import AddObj from './pages/AddObj';
import ListView from './pages/listView'
import Signin from './pages/Signin';
import Upload from './pages/Upload';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Hello" component={SignUp} />
     
    
      <Stack.Screen name="AddObj" component={AddObj} /> 
      <Stack.Screen name="ListView" component={ListView} /> 
      <Stack.Screen name="Upload" component={Upload} />


    </Stack.Navigator>
  </NavigationContainer>
        );
};

export default App;
