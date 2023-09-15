import {  FlatList, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';


export default function ListView() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
          .collection('students')
          .onSnapshot(querySnapshot => {
            const users = [];
      
            querySnapshot.forEach(documentSnapshot => {
              users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setUsers(users);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);



  return (
    <View>
    <FlatList
    data={users}
    renderItem={({ item }) => (
      <TouchableOpacity  style={{ height: 200, flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth:5, borderColor:'black' }}>
        <Text>Name: {item.Name}</Text>
        <Text>Phone: {item.Phone}</Text>
        <Text>E-mail: {item.email}</Text>
        <Text>Address: {item.Address}</Text>
        <Text>Age: {item.Age}</Text>
    </TouchableOpacity> 
    )}
  />
  </View>
  )
}