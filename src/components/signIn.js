import React from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {auth} from "../firebase"
import {Button} from "@mui/material"

function SignIn()
{
  const googleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return(
    <div>
        <Button onClick={googleSignIn}> Google sign in</Button>
    </div>  
    )
}

export default SignIn