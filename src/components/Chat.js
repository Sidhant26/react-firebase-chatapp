import React,{useState, useEffect} from "react"
import signOut from "./signOut"
import firebase from "firebase/compat/app"

const db=firebase.firestore()

export default function Chat()
{
    const [messages,setMessages]=useState([])
    useEffect(()=>{
    db.collection("messages").orderBy("createdAt").limit(30).onSnapshot(snapshot=>{     //createdAt: Most recent message at the bottom, onSnapshot: Runs whenever someething changes
        setMessages(snapshot.docs.map(m=>m.data))                                       //limit: number of messages shown
    })
    },[])
    return(
        <>
            <signOut />
            {messages.map(({id,text,pic})=>{              //destructured variables will be passed in
                <div>
                    <img src="{pic}" />
                    <p>{text}</p>
                    
                </div>
            })}
        </>
    )
}