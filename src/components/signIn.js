import React from "react"
import {auth} from "firebase/auth"
import {Button} from "@mui/material"

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