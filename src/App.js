import React from 'react'
import SignIn from './components/SignIn'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'
import {auth} from './firebase'

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