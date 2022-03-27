import React from 'react'
import SignIn from './components/SignIn'
import firebase from "firebase/compat/app"
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'
import {auth} from './firebase'
import SignOut from './components/signOut'

export default function App() {
  const [user] = useAuthState(auth);        //returns some info if logged in, otherwise returns null
  return (
    <div className="App">
      <header className="App-header">
        <section>
            {user ? <Chat />:<SignIn />}
        </section>
      </header>
    </div>
  );
}