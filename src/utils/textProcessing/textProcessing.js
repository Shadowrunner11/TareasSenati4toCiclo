const processText= (mensaje)=>{
    if ((mensaje.includes("listar") || mensaje.includes("lista")) && mensaje.includes("autores")){
        return "getAllAuthors"
    }

    if(mensaje.includes("libros") && 
        mensaje.includes("de") && (mensaje.includes("tienes") || mensaje.includes("hay"))){
        return "echo"
    }

    if(mensaje.includes("hola") || mensaje.includes("buenas") || mensaje.includes("buenos ")){
        return "greeting"
    }

    if(mensaje.includes("jodas") || mensaje.includes("jodido") || mensaje.includes("estupido") || mensaje.includes("imbecil")){
        return "easterEgg"
    }

    return "echo"
    
} 

export {processText}