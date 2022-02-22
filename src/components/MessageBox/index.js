import React from "react";

const MessageBox = ({from, text, date}) =>{
    const flag = from==="sender"
    const style ={
        display: "flex",
        alingItems: "center",
        justifyContent: flag? "flex-end": "flex-start",
        flexDirection: flag? "row-reverse":"row"

    }


    return(
        <div style={style}>
        
            <div style={{width: "70%"}}>
                {text}
            </div>
            <time style={{width:"10%"}}>{new Date(date*1000).toLocaleTimeString("en-US")}</time>

        </div>
    )
}

export {MessageBox}
