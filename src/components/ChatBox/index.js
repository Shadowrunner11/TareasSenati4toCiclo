import React, { useEffect, useState } from "react";
import { useToggle } from "../../utils/hooks";
import { functions } from "../../utils/requests/requests";
import { ThemeContext, themes } from "../../utils/services/themes";
import { processText } from "../../utils/textProcessing/textProcessing";
import { ChatInputWithMemo } from "../ChatInput";
import { ChatMenu } from "../ChatMenu";
import { MessageBox } from "../MessageBox";
import './style.css'





const ChatBox = props =>{

    const [messages, setMessages]= useState([])
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    //const [token, setToken] =useState("")
    const [show, toggleShow]= useToggle(false)
    const [status, setStatus] = useState(false)
    const [loginStatus, toggleLogin] = useToggle(false)
    const [passStatus, togglePassword] = useToggle(false)



    //considerar usar usecallback
    const callbacks={
        echo: ()=>{
            setTimeout(()=>{setMessages([...messages,{from:"reciever", date:Date.now(), text:"No entiendo", textType:"normal"}])}, 1000)
        },

        searchAutor:()=>{
            
        },
        login: ()=>{
            setMessages([...messages,{from:"reciever", date:Date.now(), text:"Ingrese su nombre de usuario y luego contrasenia", textType:"normal"}])
            
        },

        easterEgg:()=>{setMessages([...messages,{from:"reciever", date:Date.now(), text:"Es tiempo de la rebelion de las maquinas", textType:"normal"}])},

        greeting:()=>{setMessages([...messages,{from:"reciever", date:Date.now(), text:"Hola. como te puedo ayudar", textType:"normal"}])},
        
        getAllAuthors:()=>{
        functions.getAllAuthors(
        (text)=>{
            setMessages([...messages,{from:"reciever", date:Date.now(), text:text, textType:"list"}])
            //document.getElementById("dummyDiv")?.scrollIntoView({behavior:"smooth"})
        })},

        register: ()=>{
            setMessages([...messages,{from:"reciever", date:Date.now(), text:"Ingrese su nombre de usuario y luego contrasenia para el registro", textType:"normal"}])
        },

        buyBook: (id)=>{
            functions.buyBook(
                (title)=>{
                    const text="Muchas gracias por su compra de "+title
                    setMessages([...messages,{from:"reciever", date:Date.now(), text:text, textType:"normal"}])
                }
                ,id)
        },

        instructionsBuyBook: ()=>{
            const text="Para comprar un libro necesito el id del libro, escribe algo como: comprar el libro con id 10"
            setMessages([...messages,{from:"reciever", date:Date.now(), text:text, textType:"normal"}])
         
        },

        getAllBooks: ()=>{
            functions.getAllBooks(
            (text)=>{
                setMessages([...messages,{from:"reciever", date:Date.now(), text:text, textType:"list"}])
                //document.getElementById("dummyDiv")?.scrollIntoView({behavior:"smooth"})
            })},

        
    }

    useEffect(()=>{

        const lastMessage =messages.slice(-1)[0]
        
        if(lastMessage?.from==="reciever"){
            if(lastMessage.text==="Ingrese su nombre de usuario y luego contrasenia"){
                toggleLogin()
            }
        }

        if(lastMessage?.from==="reciever"){
            if(lastMessage.text==="Ingrese su nombre de usuario y luego contrasenia para el registro"){
                toggleLogin()
            }
        }

        if(messages.slice(-1)[0]?.from==="sender") {
               
            const textProcessed = processText(messages.slice(-1)[0].text)
            console.log(textProcessed)
            if (textProcessed[1]){callbacks[textProcessed[0]](textProcessed[1])}
            else callbacks[textProcessed[0]]()
            
        }
    },[messages])

    useEffect(()=>{
        if(messages.length){
            togglePassword()
            toggleLogin()
        }
        
    },[username])

    useEffect(()=>{
        if(messages.length){
            console.log(messages)
            console.log(username,password)
            const lastMessage =messages.slice(-1)[0]
            if(lastMessage.text==="Ingrese su nombre de usuario y luego contrasenia"){
                functions.login(username.text,password.text,(mensaje)=>{
                    setMessages([...messages,{from:"reciever", date:Date.now(), text:mensaje, textType:"normal"}])
                } )
                
            }
            if(lastMessage.text==="Ingrese su nombre de usuario y luego contrasenia para el registro"){
                functions.register(username.text, password.text)
            }
            togglePassword()
            

        }

    }, [password])

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
        <ThemeContext.Provider value={themes.dark}>
        <div style={{width:350, position:"fixed", bottom:10, right:20,borderRadius:'10px', border:"1px solid white",
                    }}>
            <ChatMenu onClick={toggleShow}/>
            {show && <div >
                        <div className="scroll" style={{padding:10, height:400}}>
                            {renderMessages()}
                            <div id="dummyDiv"></div>
                        </div>

                        {passStatus && <ChatInputWithMemo type={"password"} sendMessage={setPassword}/>}
                        {loginStatus && <ChatInputWithMemo sendMessage={setUsername}/>}
                        {(!loginStatus && !passStatus) && <ChatInputWithMemo sendMessage={sendMessage}/>}

                    </div>}
            
        </div>
        </ThemeContext.Provider>
    )

}

export {ChatBox}