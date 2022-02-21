import React from "react";
import SendIcon from '@mui/icons-material/Send';
const ChatInput = props =>{
    return (
        <div>
            <input autoComplete="off" id={"inputMessage"} style={{width:"80%",}} type="text"/>
            <span onClick={()=>{
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