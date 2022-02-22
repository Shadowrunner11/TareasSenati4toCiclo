import React from "react";

const ChatMenu = ({onClick}) =>{
    return <div style={{borderRadius:3, border:"1px solid white", padding:"1% 4% 1% 4%"}} onClick={onClick}>
        ChatBot
    </div>
}

export {ChatMenu}