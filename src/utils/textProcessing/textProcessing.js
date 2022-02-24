const processText= (mensaje)=>{
    if ((mensaje.includes("listar") || mensaje.includes("lista")) && mensaje.includes("autores")){
        return "getAllAuthors"
    }

    if(mensaje.includes("libros") && 
        mensaje.includes("de") && (mensaje.includes("tienes") || mensaje.includes("hay"))){
        return "echp"
    }
    return "echo"
    
} 

export {processText}