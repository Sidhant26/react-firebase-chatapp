import React from 'react'
import './App.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import signIn from './components/signIn'
import Chat from './components/Chat'

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

export default function App() {
  const [user]=useAuthState(auth);     //returns null if logged out, some data otherwise
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {user ? <Chat /> : <signIn />}
        </section>
      </header>
    </div>
  );
}