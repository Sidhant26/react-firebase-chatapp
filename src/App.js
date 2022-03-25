import React from 'reeact'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'

const firebaseConfig={
  apiKey: "AIzaSyDmFgSbTGcJ2uPUJRE35pEO0suUSGSolfE",
  authDomain: "react-firebase-chatapp-50ffa.firebaseapp.com",
  projectId: "react-firebase-chatapp-50ffa",
  storageBucket: "react-firebase-chatapp-50ffa.appspot.com",
  messagingSenderId: "1041695373842",
  appId: "1:1041695373842:web:fbfaef0c3c44d6299276cb",
  measurementId: "G-JPFC1BMJFP"
}

firebase.initializeApp({firebaseConfig})

const auth=firebase.auth(), firestore=firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
