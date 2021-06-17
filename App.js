import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Kuuco from './src/index'
import * as firebase from 'firebase/firebase-app'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {  
  const firebaseConfig = {
    apiKey: "AIzaSyCtqFW-EDxbWBa_Gd38xu8FeNJ8UXReyDg",
    authDomain: "kuuco-9243b.firebaseapp.com",
    projectId: "kuuco-9243b",
    storageBucket: "kuuco-9243b.appspot.com",
    messagingSenderId: "764882433563",
    appId: "1:764882433563:web:d22c8248468ace445f2abe",
    measurementId: "G-1WBR16G4NL"
  };
  if(firebase.apps.length==0){
      firebase.initializeApp(firebaseConfig)
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Kuuco/>
      </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Roboto',
    color: 'rgb(97,218,198)'

  },
});
