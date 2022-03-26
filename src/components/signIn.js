import React from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {Button} from "@mui/material"

const auth=firebase.auth()

export default function signIn()
{
  const googleSignIn=()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
  }
  return(
    <Button onClick={googleSignIn}> Google sign in</Button>
  )
}