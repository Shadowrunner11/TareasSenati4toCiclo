import React from "react";

const MessageBox = ({from, text, date, textType}) =>{
    const flag = from==="sender"
    const style ={
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flexDirection: flag? "row-reverse":"row",
        textAlign:"left"

    }


    return(
        <div style={{...style, marginBottom:0, marginTop:0, minHeight:"10%"}}>
        
            <div style={{width: "60%",  padding:"", margin:"5px 0px"}}>
                {textType==="list" && <pre>{text}</pre>}
                {textType==="normal" && 
                    <div style={{borderRadius:'8px', border:"1px solid white",padding:"10px 15px"}}>{text}</div>}
            </div>
            {//Ver la posibilidad de almacernar este calculo
            //Cunado el mensaje es muy grande no se ajusta el heigt del widht
            }
            <time style={{width:"20%", height:"50%", margin:"10px", fontSize:"12px"}}>
            {new Date(date).toLocaleTimeString("en-US", {timeStyle: "short"})}</time>

        </div>
    )
}

//Crear imlementacion de withMemo de este componente para ahorrar memoria

export {MessageBox}
