import * as firebase from 'firebase'
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