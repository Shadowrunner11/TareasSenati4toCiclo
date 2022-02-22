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
        <div style={{borderRadius:3, borderTop:"1px solid white", padding:"1% 4% 1% 4%"}}>
            <input style={{width:"80%"}} id={"inputMessage"}  type={type} autoComplete={"off"} />
            <button style= {{width: "15%"}}onClick={handleClick}><i></i>Send</button>
        </div>
    )
}

const ChatInputWithMemo = memo(ChatInput)

export {ChatInput, ChatInputWithMemo}