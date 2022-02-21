import React from "react";
import Avatar from "@mui/material/Avatar"
const ChatBox = props => {
    return(
        <div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p>Hola como estas</p>
            </div>
            {props.messages.map((e,i)=>{
                return(
                    <div key={`mensaje-${i}`} style={{display:"flex", justifyContent:"flex-end"}}>
                        <p>{e}</p>
                        <Avatar alt="Pemy Sharp" src="/static/images/avatar/2.jpg" />
                    </div>
                    
                )
            })}
        </div>
    )
}

export {ChatBox}