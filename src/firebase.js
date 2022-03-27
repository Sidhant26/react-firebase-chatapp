import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"        //Firebase version 9 compat

const firebaseConfig={
    apiKey: "AIzaSyDmFgSbTGcJ2uPUJRE35pEO0suUSGSolfE",
    authDomain: "react-firebase-chatapp-50ffa.firebaseapp.com",
    projectId: "react-firebase-chatapp-50ffa",
    storageBucket: "react-firebase-chatapp-50ffa.appspot.com",
    messagingSenderId: "1041695373842",
    appId: "1:1041695373842:web:fbfaef0c3c44d6299276cb",
    measurementId: "G-JPFC1BMJFP"
  }
  
  const fb=firebase.initializeApp(firebaseConfig)

  const db=fb.firestore()
  const auth=firebase.auth()

  export {db,auth}