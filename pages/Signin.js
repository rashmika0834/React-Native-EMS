import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, Input, Container, Center, Heading, Button, Icon, Pressable } from 'native-base'
import {Entypo, MaterialIcons} from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '741858069689-gj2e94lquffkmc5cjpt5bjiakv70vufl.apps.googleusercontent.com',
});

//ToDo: Use Asynchronous storage for onetime Login

export default function Signin({navigation}) {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [show, setShow] = React.useState(false);
  
    const Signin = async() => {
            auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
              (res) => {console.log(res)}
              navigation.navigate('ListView')
            }
              )
            .catch((err) => {console.log(err), Alert.alert('error!')})
  
      }

      
const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  
    return (
      <NativeBaseProvider backgroundColor>
          <Container ml={"10%"}  alignItems={"center"} >
              <Center >
              <Heading mb={"20%"} mt={"30%"} color={"blueGray.700"} size="lg">Sign In</Heading>
  
              <Input mt={"0%"} variant="rounded" value={email} onChangeText={e => SetEmail(e)} placeholder="E-mail" />
              {/* <Input mt={"10%"} variant="rounded" value={password} onChangeText={e => SetPassword(e)} placeholder="Password" /> */}
  
              <Input w={ {
                mt: "5%",
        base: "75%",
        md: "25%" 
      }} type={show ? "text" : "password"} variant="rounded" value={password} onChangeText={e => SetPassword(e)} mt={"10%"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Password" />
  
  
  
              {/* <Input mt={"10%"} variant="rounded" value={passAgain} onChangeText={e => SetPassAgain(e)} placeholder="Re-enter Password" /> */}
  
              <Button size="lg"   mt={"20%"} fontSize={"4%"} colorScheme={"cyan"} onPress={Signin} >Sign In </Button>
            
              <GoogleSigninButton
                    style={{marginTop:"10%"}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={onGoogleButtonPress}
                   
/>;
             
  
              </Center>
          </Container>
      </NativeBaseProvider>
  )
}