import React from "react";

const MessageBox = ({from, text, date}) =>{
    const flag = from==="sender"
    const style ={
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flexDirection: flag? "row-reverse":"row",
        textAlign:flag? "right": "left"

    }


    return(
        <div style={{...style, marginBottom:20, marginTop:20, minHeight:"10%"}}>
        
            <div style={{width: "60%", borderRadius:3, border:"1px solid white", padding:"1% 4% 1% 4%", margin:"0 2% 0 2%"}}>
                <p>{text}</p>
            </div>
            {//Ver la posibilidad de almacernar este calculo
            //Cunado el mensaje es muy grande no se ajusta el heigt del widht
            }
            <time style={{width:"20%", height:"50%", margin:"0 4% 0 4%"}}>{new Date(date).toLocaleTimeString("en-US", {timeStyle: "short"})}</time>

        </div>
    )
}

//Crear imlementacion de withMemo de este componente para ahorrar memoria

export {MessageBox}
