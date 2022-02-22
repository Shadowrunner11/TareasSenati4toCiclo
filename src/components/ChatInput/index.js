import React, { memo, useEffect} from 'react'
import "./style.css"
const ChatInput = ({type, sendMessage}) => {

    const handleClick= ()=>{
        const input = document.getElementById("inputMessage")
        const message = {
            text: input.value,
            date: Date.now(),
            from: "sender"
        }
        sendMessage(message)
        input.value = null
    }

    useEffect(()=>{console.log("aaaa")})

    return(
        <div style={{borderRadius:3, borderTop:"1px solid white", padding:"1% 4% 1% 4%", display:"flex"}}>
            <input style={{width:"80%"}} id={"inputMessage"}  type={type} autoComplete={"off"} />
            <div style= {{width: "20%"}} onClick={handleClick}><i className="fas fa-paper-plane"></i></div>
        </div>
    )
}

const ChatInputWithMemo = memo(ChatInput)

export {ChatInput, ChatInputWithMemo}