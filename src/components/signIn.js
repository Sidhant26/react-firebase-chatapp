import React from "react"
import {auth} from 'firebase/auth'

export default function signIn()
{
  const googleSignIn=()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
  }
  return(
    <button onClick={googleSignIn}> Google sign in</button>
  )
}