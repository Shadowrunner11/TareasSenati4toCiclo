import React, { useEffect, useState } from "react";
import { functions } from "../../utils/requests/requests";
import { processText } from "../../utils/textProcessing/textProcessing";
import { ChatInputWithMemo } from "../ChatInput";
import { ChatMenu } from "../ChatMenu";
import { MessageBox } from "../MessageBox";

const useToggle = initial =>{
    const [show, setShow]=useState(initial)
    const toggleShow = ()=>{setShow((prevShow)=>!prevShow)}
    return [show, toggleShow]

}

const ChatBox = props =>{

    const [messages, setMessages]= useState([])
    const [show, toggleShow]= useToggle(false)
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        
        if(messages.slice(-1)[0]?.from==="sender") {
            
            const callbacks={
                echo: ()=>{setMessages([...messages,{from:"reciever", date:Date.now(), text:"No entiendo", textType:"normal"}])},

                "getAllAuthors":(text)=>{
                    setMessages([...messages,{from:"reciever", date:Date.now(), text:text, textType:"list"}])
                    document.getElementById("dummyDiv")?.scrollIntoView({behavior:"smooth"})
                }
            }
            
            const textProcessed = processText(messages.slice(-1)[0].text)
            
            functions[textProcessed](callbacks[textProcessed])
            
        }
    },[messages])

    useEffect(()=>{
        document.getElementById("dummyDiv")?.scrollIntoView({behavior:"smooth"})
    })

    const sendMessage = (message)=>{
        setMessages([...messages, message])
    }
    const renderMessages = ()=>{
        return messages.map((e,i)=><MessageBox key={`message-${i}`} {...e}/>)
    }

    return (
        <div style={{width:400, position:"fixed", bottom:10, right:20}}>
            <ChatMenu onClick={toggleShow}/>
            {show && <div style={{borderRadius:3, border:"1px solid white"}}>
                        <div style={{overflowY:"auto", height:400}}>
                            {renderMessages()}
                            <div id="dummyDiv"></div>
                        </div>
                        <ChatInputWithMemo sendMessage={sendMessage}/>
                    </div>}
            
        </div>
    )

}

export {ChatBox}