import React from "react";

const ChatMenu = ({onClick}) =>{
    return (
        <div style={{
                borderRadius:'10px',
                border:"1px solid white", 
                padding:"10px 15px"
            }} 
            onClick={onClick}>
            <div>ChatBot</div>
        </div>
    )
}

export {ChatMenu}