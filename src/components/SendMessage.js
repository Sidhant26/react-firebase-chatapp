import React,{useState} from 'react'
import SendIcon from '@mui/icons-material/Send'
import {Input,Button} from "@mui/material"
import {db,auth} from "../firebase"
import firebase from "firebase/compat/app"

function SendMessage({scrollDown}) {
  const [message,setMessage]=useState("")
  async function sendMessage(e){
  e.preventDefault()
  const {uid,photoURL}=auth.currentUser
  await db.collection("messages").add({
    text: message,
    photoURL,
    uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  setMessage(" ")
  scrollDown.current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div>
        <form onSubmit={sendMessage}>
          <div className='sendmessage'>
            <Input style={{ width: '95%', fontSize: '15px', fontWeight: '500', marginLeft: '5px', marginBottom: '-3px' }}
            value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your message goes here"></Input>
                <Button style={{ 
          padding: '20px', fontSize: '20px', fontWeight: '250', color: 'gray'}}type="submit"><SendIcon /></Button>
          </div>
        </form>
    </div>
  )
}

export default SendMessage