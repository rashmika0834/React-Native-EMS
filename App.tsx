/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Homepage from './pages/Homepage';
import { NativeBaseProvider, Box, TextArea, Input, Stack, Button } from "native-base";
import SignUp from './pages/SignUp';



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  buttonStl:{
    borderRadius:20,
    color:'#2196F3',
    padding:'5%',
    marginTop:20,

    borderColor:'white',
    backgroundColor:'aqua',
    
  },
  touchableTxt:{
    color:'black',
  
  }
});



const App = () => {
  return (
    
//     <View style={{ justifyContent: 'center', alignItems: 'center'}}>
//       {/* <Text style = {{color:'aqua', paddingBottom: '10%'}}>Hello, React Native!</Text>
//       <Button
//        color={"red"}
//        title='Click Me'  />

//       <TouchableOpacity style={styles.buttonStl}>
//         <Text style={styles.touchableTxt}>Helloo</Text>
//       </TouchableOpacity>
//       <Homepage/> */}

// <Text style={{padding:50, fontSize:20}} >Login Page</Text>
  
//   <NativeBaseProvider>

  
//   <Stack space={10} w="75%" maxW="300px" mx="auto">
//     <Input style={{padding:20}} width={300} h={10} variant="rounded" placeholder="Email" />
//     <Input style={{padding:20}} width={300} h={10} variant="rounded" placeholder="Password" />

//     <Button mt="2" colorScheme="indigo" height={10} >
//             Sign in
//           </Button>
//     </Stack>

    
//     </NativeBaseProvider>
//     </View>
<SignUp/>

  );
};

export default App;
