import React,{useState, useEffect} from "react"
import SignOut from "./signOut"
import {db} from "../firebase"
import SendMessage from "./SendMessage"

export default function Chat()
{
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        db.collection("messages").orderBy("createdAt").limit(30).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
    })
    },[])
    return(
        <>
            <SignOut />
            {messages.map(({id,text,photoURL})=>(
                <div>
                    <div key={id}>
                        <img src={photoURL} alt=""/>
                        <p>{text}</p>
                    </div>
                </div>
            ))}
            <SendMessage />
        </>
    )
}