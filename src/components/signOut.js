import React from "react"
import "firebase/compat/auth"
import {Button} from "@mui/material"
import {auth} from "../firebase"

function SignOut() {
  return auth.currentUser && (
    <div style={{
      display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, 
      borderBottom: 'solid 1px lightgray', zIndex: '10'
  }}>
        <Button style={{ 
          padding: '20px', fontSize: '20px', fontWeight: '250', color: 'gray'}}onClick={()=>auth.signOut()}>Sign out</Button>
    </div>
  )
}

export default SignOut
