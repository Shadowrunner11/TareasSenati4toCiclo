import {useState} from "react"
const useToggle = initial =>{
    const [show, setShow]=useState(initial)
    const toggleShow = ()=>{setShow((prevShow)=>!prevShow)}
    return [show, toggleShow]

}

export {useToggle}