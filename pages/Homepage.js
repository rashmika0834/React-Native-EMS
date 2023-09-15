/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box } from "native-base";


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
});

export default function Homepage() {
  return (
    <View>
      <TextInput
        placeholder="Enter the Name"
      />
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )}