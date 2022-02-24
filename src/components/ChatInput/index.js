import React, { memo, useEffect} from 'react'
import "./style.css"
const ChatInput = ({type, sendMessage}) => {

    const handleClick= ()=>{
        const input = document.getElementById("inputMessage")
        const message = {
            text: input.value,
            date: Date.now(),
            from: "sender",
            textType: "normal"
        }
        sendMessage(message)
        input.value = null
    }

    useEffect(()=>{console.log("aaaa")})

    return(
        <div className='formInput'>
            <input className='textInput' id={"inputMessage"}  type={type} autoComplete={"off"} placeholder="Aa" autoFocus/>
            <div onClick={handleClick} className="inputSend"></div>
        </div>
    )
}

const ChatInputWithMemo = memo(ChatInput)

export {ChatInput, ChatInputWithMemo}