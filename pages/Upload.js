import { View, Text } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { NativeBaseProvider, Input, Container, Center, Heading, Button, Icon, Pressable } from 'native-base'
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';


export default function Upload() {

    const upload =()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
        }

  return (
    
     <NativeBaseProvider>
        <Container ml={"10%"}  alignItems={"center"}>
     <Heading mb={"20%"} mt={"30%"} color={"blueGray.300"} size="lg">Upload Image</Heading>

     <Button size="lg"   mt={"20%"} fontSize={"4%"} colorScheme={"cyan"} onPress={upload} > Click to Upload </Button>
     
     
     </Container>
     </NativeBaseProvider>
    
  )
}