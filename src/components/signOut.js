import React from "react"
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import {Button} from "@mui/material"
import {auth} from "../firebase"

function SignOut() {
  return(
        <Button onClick={()=>auth.signOut()}>Sign out</Button>
  )
}

export default SignOut
