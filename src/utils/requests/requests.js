const ENV={
    URI: "http://127.0.0.1:5000/api/",
}
const API_ROUTES_DEV ={
    
    GET:{       
        authorsByName: name => ENV.URI+"authors/"+name,
        booksByTitle: name=>ENV.URI+"books/"+name
    },

    POST:{
        login: ENV.URI+"users/login",
        register: ENV.URI+"users/"
    },

    PUT:{
        buyBook: id => ENV.URI+"books/comprar/"+id
    }
 
}

const formatAuthors = e =>`- ${e.first_name} ${e.last_name} \n`
const formatBooks = e =>` -${e.title} \nprecio :S/. ${e.price}  \nstock: ${e.stock}  \nid:${e.id}\n`

const functions ={

    getAllAuthors: (callback=ans=>{console.log(ans)}, name="")=>{
        fetch(API_ROUTES_DEV.GET.authorsByName(name))
            .then(response=>response.json())
            .then(data=>{
                let ans =""
                data.authors.map(e=>ans+=formatAuthors(e))
                callback(ans)
    
            })
    },

    login:
        (username, password, callback)=>{
            
            fetch(API_ROUTES_DEV.POST.login,  {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                 body: JSON.stringify({
                    username: username,
                    password: password,
                })
            }).then(response=>response.json())
            .catch(e=>console.log(e))
            .then(data=>{
                if(data?.code==="success"){
                    document.cookie=`token=${data.access_token}`
                    callback(`Hola ${username}, bienvenido`)
                }
                else{
                    callback("Algo salio mal, verifica si tu usuario y contrasenia son correctos")
                }
            }
            )
         

        },
    register:(username, password)=>{
        fetch(API_ROUTES_DEV.POST.register, {
            method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                 body: JSON.stringify({
                    username: username,
                    password: password,
                })
        }).then(response=>console.log(response))
    },

    getAllBooks: (callback=ans=>{console.log(ans)}, name="")=>{
        fetch(API_ROUTES_DEV.GET.booksByTitle(name))
            .then(response=>response.json())
            .then(data=>{
                let ans =""
                data.authors.map(e=>ans+=formatBooks(e))
                callback(ans)
    
            })
    },

    buyBook: (callback, id, cantidad=1)=>{
        fetch(API_ROUTES_DEV.PUT.buyBook(id),{
            method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                 body: JSON.stringify({
                    cantidad: cantidad,
                    
                })
        }).then(response=>response.json())
        .then(data=>callback(data.book.title))
            
    }

        
}


//getAllAuthors()

export {functions}