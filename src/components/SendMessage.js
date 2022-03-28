import React,{useState} from 'react'
import SendIcon from '@mui/icons-material/Send'
import {Input,Button} from "@mui/material"
import {db,auth} from "../firebase"
import firebase from "firebase/compat/app"

function SendMessage() {
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
  }
  return (
    <div>
        <form onSubmit={sendMessage}>
            <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your message"></Input>
                <Button type="submit"><SendIcon /></Button>
        </form>
    </div>
  )
}

export default SendMessage