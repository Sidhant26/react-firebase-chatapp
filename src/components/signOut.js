import React from "react"
import "firebase/compat/auth"
import {Button} from "@mui/material"
import {auth} from "../firebase"

function SignOut() {
  return auth.currentUser && (
        <Button onClick={()=>auth.signOut()}>Sign out</Button>
  )
}

export default SignOut
