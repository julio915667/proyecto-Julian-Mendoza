import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const FirebaseConfig = {
    apiKey: "AIzaSyD0RDdR7m196GgFbv7f_Q1LsH9BfTrvf2A",
    authDomain: "ecommersreactcoder.firebaseapp.com",
    projectId: "ecommersreactcoder",
    storageBucket: "ecommersreactcoder.appspot.com",
    messagingSenderId: "369471777851",
    appId: "1:369471777851:web:186229d8d6d9103943c01e"
  };

  const app = initializeApp(FirebaseConfig);
  
  export const db = getFirestore(app);