import React, { useEffect, useState } from 'react'
import { ChatBox } from '../chatBox'
import { ChatInput } from '../chatInput/ChatInput'
import { Avatar } from '@mui/material'
import "./style.css"
const Chat = props => {
    const [showChat, setShowChat] = useState(false)
    const [messages, setMessages] = useState([])
    const [respuestas, setRespuestas] = useState([])
    const senMessage = (message)=>{
        setMessages([...messages, message])
        
    }
    useEffect(()=>{
        
        //const localMensajes =JSON.parse(localStorage.getItem("mensajes"))
    
        //if(localMensajes!==null)setMessages(localMensajes)
    },[])
    useEffect(()=>{
        //localStorage.setItem("mensajes",JSON.stringify(messages))
        const mensaje = messages.slice(-1)[0]?.toLowerCase()
        if(mensaje?.includes("romano") && (mensaje.includes("convertir")|| mensaje?.includes("transformar")) && (/\d/g).test(mensaje)) {
            fetch(`http://localhost:5000/conversor?num=${mensaje.match(/\d+/g)}`).
                then(response => response.json())
                .then(data=>{console.log(data);setMessages([...messages,data.respuesta])})
        }
       
    },[messages])

    
    return (
        <div className='chat-container'>
            <div className='chat-prompt' onClick={()=>{setShowChat(!showChat)}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                Chat Bot
                
            </div>
            {showChat && <div style={{border: "1px solid rgb(151, 151, 197)"}}>
             <ChatBox messages={messages} />

             <ChatInput senMessage={senMessage}/>
            </div>}
        </div>
    )
}
export {Chat}