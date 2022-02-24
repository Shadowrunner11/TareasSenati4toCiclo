const ENV={
    URI: "http://127.0.0.1:5000/api/",
}
const API_ROUTES_DEV ={
    
    GET:{       
        authorsByName: name => ENV.URI+"authors/"+name
    },

    POST:{
        login: ENV.URI+"users/login",
        register: ENV.URI+"users/"
    }
 
}

const formatAuthors = e =>`- ${e.first_name} ${e.last_name} \n`
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
                    callback("Ingreso exitoso")
                }
                else{
                    callback("Algo salio mal")
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
    }

        
}


//getAllAuthors()

export {functions}