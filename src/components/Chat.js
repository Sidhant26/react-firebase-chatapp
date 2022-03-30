import React,{useState, useEffect, useRef} from "react"
import SignOut from "./signOut"
import {auth, db} from "../firebase"
import SendMessage from "./SendMessage"

export default function Chat()
{
    const scrollDown=useRef()
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        db.collection("messages").orderBy("createdAt").limit(30).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
    })
    },[])
    return(
        <div>
            <SignOut />
            <div className="messages">
                {messages.map(({id,text,photoURL,uid})=>(
                    <div>
                        <div key={id} className={`message ${uid===auth.currentUser.uid ? "sent":"received"}`}>
                            <img src={photoURL} alt=""/>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
            <div ref={scrollDown}></div>
        </div>
    )
}