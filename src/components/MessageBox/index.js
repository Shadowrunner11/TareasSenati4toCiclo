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
            {//Ver la posibilidad de almacernar este calculo
            }
            <time style={{width:"10%"}}>{new Date(date).toLocaleTimeString("en-US", {timeStyle: "short"})}</time>

        </div>
    )
}

//Crear imlementacion de withMemo de este componente para ahorrar memoria

export {MessageBox}
