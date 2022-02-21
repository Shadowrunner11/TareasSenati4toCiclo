import React from "react";
import SendIcon from '@mui/icons-material/Send';
import "./style.css"
const ChatInput = props =>{
    return (
        <div>
            <input autoComplete="off" id={"inputMessage"} style={{width:"80%", marginBottom:20}} type="text"/>
            <span style={{marginLeft:10, bottom: -27}} onClick={()=>{
                    const input = document.getElementById("inputMessage")
                    props.senMessage(input.value)
                    input.value = ""
                }}>
                <SendIcon />
            </span>
        </div>
        
        
    )
}

export {ChatInput}