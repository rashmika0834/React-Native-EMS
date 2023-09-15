import { View, Text,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, Input, Container, Center, Heading, Button, Icon, Pressable } from 'native-base'
import {Entypo, MaterialIcons} from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';



export default function SignUp({ navigation }) {

  const [show, setShow] = React.useState(false);
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [passAgain, SetPassAgain] = useState('');
  const [name, SetName] = useState('');
  const [phone, SetPhone] = useState('');
  const [age, SetAge] = useState('');
  const [address, SetAddress] = useState('');



  const pressed = async() => {

  if(password === passAgain){
   await auth()
  .createUserWithEmailAndPassword(email, password)
  .then(
    Alert.alert('User Created')
  )
  
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert("That email address is already in use!");

    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert("That email address is invalid!");

    }

    console.error(error);
  });
}else{
  console.log("Passwords doesn't match");
  Alert.alert("Passwords doesn't match");
}

    }

  return (
    <NativeBaseProvider backgroundColor>
        <Container ml={"10%"}  alignItems={"center"} >
            <Center >
            <Heading mb={"20%"} mt={"30%"} color={"blueGray.700"} size="lg">Sign Up</Heading>

            <Input mt={"0%"} variant="rounded" value={name} onChangeText={e => SetName(e)} placeholder="Name" />
            <Input mt={"5%"} variant="rounded" value={email} onChangeText={e => SetEmail(e)} placeholder="E-mail" />




            {/* <Input mt={"10%"} variant="rounded" value={password} onChangeText={e => SetPassword(e)} placeholder="Password" /> */}

            <Input w={ {
              mt: "5%",
              base: "75%",
              md: "25%" 
    }} type={show ? "text" : "password"} variant="rounded" value={password} onChangeText={e => SetPassword(e)} mt={"10%"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Password" />


          <Input w={ {
               mt: "5%",
      base: "75%",
      md: "25%" 
    }} type={show ? "text" : "password"} variant="rounded" value={passAgain} onChangeText={e => SetPassAgain(e)} mt={"10%"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Re-Enter Password" />

            {/* <Input mt={"10%"} variant="rounded" value={passAgain} onChangeText={e => SetPassAgain(e)} placeholder="Re-enter Password" /> */}

            <Button size="lg"   mt={"20%"} fontSize={"4%"} colorScheme={"cyan"} onPress={pressed} >Sign Up </Button>
          
           

            </Center>
        </Container>
    </NativeBaseProvider>

  )
}