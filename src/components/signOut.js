import React from "react"
import {auth} from "firebase/auth"
import {Button} from "@mui/material"

function signOut() {
  return auth.currentUser && (
        <Button onClick={()=>auth.signOut()}></Button>
  )
}

export default signOut
