import React from "react"
import "firebase/compat/auth"
import {Button} from "@mui/material"
import {auth} from "../firebase"

function SignOut() {
  return auth.currentUser && (
    <div style={{
      display: 'flex', justifyContent: 'flex-end', position: 'fixed', width: '100%', top: 0}}>
        <Button style={{ 
          padding: '10px', fontSize: '20px', fontWeight: '250', color: 'gray'}}onClick={()=>auth.signOut()}>Sign out</Button>
    </div>
  )
}

export default SignOut
