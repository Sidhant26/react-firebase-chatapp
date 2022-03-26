import React from 'react'
import SignIn from './components/SignIn'
import firebase from "firebase/compat/app"
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'
import {auth} from './firebase'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
            <SignIn />
        </section>
      </header>
    </div>
  );
}