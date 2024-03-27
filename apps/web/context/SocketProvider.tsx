"use client"
import React, { useCallback, useContext, useEffect, useState } from "react"

import { Socket, io } from "socket.io-client"


interface SoketProviderProps{
    children?: React.ReactNode
    

}

interface ISocketContext{
   sendMessage:(msg:string)=>any;

}

const SocketContext = React.createContext<ISocketContext| null>(null);

export const useSocket = ()=>{
    const state = useContext(SocketContext)

    if(!state) throw new Error(`State is undefined`)

    return state;
}

export const SocketProvider:React.FC<SoketProviderProps>= ({children})=>{

    const[socket,setsocket]= useState<Socket>()

    const sendMessage: ISocketContext["sendMessage"] = useCallback((msg)=>{
        console.log("send message", msg)
        if(socket){
            socket.emit('event:message',{message: msg})
        }
    },[socket])

    useEffect(()=>{
     const _socket = io('http://localhost:8000')
      setsocket(_socket)
     return()=>{
        _socket.disconnect();
        setsocket(undefined)
     }
    },[])
return(
    <SocketContext.Provider value={{sendMessage}}>
        {children}
    </SocketContext.Provider>
)
}