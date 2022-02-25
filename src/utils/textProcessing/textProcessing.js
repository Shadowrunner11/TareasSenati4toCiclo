const processText= (mensaje)=>{
    mensaje=mensaje.toLowerCase()
    if ((mensaje.includes("listar") || mensaje.includes("lista")) && mensaje.includes("autores")){
        return ["getAllAuthors"]
    }

    if(mensaje.includes("libros") && 
        mensaje.includes("de") && (mensaje.includes("tienes") || mensaje.includes("hay"))){
        return ["echo"]
    }

    if ((mensaje.includes("listar") || mensaje.includes("lista")) && mensaje.includes("libros")){
        return ["getAllBooks"]
    }

    if(mensaje.includes("comprar") && mensaje.includes("libro")){
        if((/\d+/g).test(mensaje) && mensaje.includes("id")) return ["buyBook" , mensaje.match(/\d+/g)[0]]
        return ["instructionsBuyBook"]
    }

    if(mensaje.includes("hola") || mensaje.includes("buenas") || mensaje.includes("buenos ")){
        return ["greeting"]
    }

    if(mensaje.includes("jodas") || mensaje.includes("jodido") || mensaje.includes("estupido") || mensaje.includes("imbecil")){
        return ["easterEgg"]
    }

    if(mensaje.includes("login")) return ["login"]

    if(mensaje.includes("registrase") || mensaje.includes("registrame")) return ["register"]

    return ["echo"]
    
} 

export {processText}