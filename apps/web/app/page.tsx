'use client'
import { useState } from "react";
import { useSocket } from "../context/SocketProvider"
import classes from "./page.module.css"

export default function page(){
  const {sendMessage}= useSocket();

  const[message, setMessage] = useState('')

  return (
    <div>
      <div>
        <h1>
          All message will appear here
        </h1>

      </div>

      <div>
        <input className={classes["chat-input"]}placeholder="Messages..."
        onChange={(e)=>setMessage(e.target.value)}
        
        ></input>
        <button className={classes["button"]}
        onClick={(e)=>sendMessage(message)}
        >Send</button>
      </div>
    </div>
  )
}