import React from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {auth} from "../firebase"
import {Button} from "@mui/material"
import "../App.css"

function SignIn()
{
  const googleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return(
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <Button style={{ 
          padding: '20px', fontSize: '20px', fontWeight: '250', color: 'gray'}} 
          onClick={googleSignIn}> Google sign in</Button>
    </div>  
    )
}

export default SignIn