import React, { memo, useEffect} from 'react'
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
        <div>
            <input id={"inputMessage"}  type={type} autoComplete={"off"} />
            <button onClick={handleClick}><i></i>Send</button>
        </div>
    )
}

const ChatInputWithMemo = memo(ChatInput)

export {ChatInput, ChatInputWithMemo}