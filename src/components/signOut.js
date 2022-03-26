import React from "react"
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import {Button} from "@mui/material"

const auth=firebase.auth()

function signOut() {
  return auth.currentUser && (
        <Button onClick={()=>auth.signOut()}></Button>
  )
}

export default signOut
