import React, {  useState } from 'react'
import { NativeBaseProvider, Input, Container, Center, Heading, Button, } from 'native-base'
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function AddObj({ navigation }) {

    const [email, SetEmail] = useState('');
    const [name, SetName] = useState('');
    const [phone, SetPhone] = useState('');
    const [age, SetAge] = useState('');
    const [address, SetAddress] = useState('');
  
    const AddEmployee = async() => {
        await firestore()
        .collection('students')
        .add({
          Name: name,
          Age: age,
          Phone:phone,
          email:email,
          Address:address
        })
        .then(() => {
          Alert.alert("User added Successfuly");
          navigation.navigate('Signin')
        });

    }


  return (
    <NativeBaseProvider backgroundColor >
        <Container ml={"10%"}  alignItems={"center"} >
            <Center>

                 <Heading mb={"20%"} mt={"30%"} color={"blueGray.700"} size="lg">Add Employer</Heading>
                 
                 <Input mt={"0%"} variant="rounded" value={email} onChangeText={e => SetEmail(e)} placeholder="E-mail" />
                 <Input mt={"5%"} variant="rounded" value={name} onChangeText={e => SetName(e)} placeholder="Name" />
                 <Input mt={"5%"} variant="rounded" value={phone} onChangeText={e => SetPhone(e)} placeholder="Phone" />
                 <Input mt={"5%"} variant="rounded" value={age} onChangeText={e => SetAge(e)} placeholder="Age" />
                 <Input mt={"5%"} variant="rounded" value={address} onChangeText={e => SetAddress(e)} placeholder="Address" />

                 <Button size="lg"   mt={"20%"} fontSize={"4%"} colorScheme={"cyan"} onPress={AddEmployee} >Add </Button>
                 

    </Center>
    </Container>
    </NativeBaseProvider>
  )
}