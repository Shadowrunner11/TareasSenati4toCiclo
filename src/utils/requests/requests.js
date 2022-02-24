const ENV={
    URI: "http://127.0.0.1:5000/api/",
}
const API_ROUTES_DEV ={
    
    GET:{       
        authorsByName: name => ENV.URI+"authors/"+name
    }
 
}

const formatAuthors = e =>`- ${e.first_name} ${e.last_name} \n`
const functions ={
    echo:(callback)=>{callback()},

    getAllAuthors: (callback=ans=>{console.log(ans)}, name="")=>{
        fetch(API_ROUTES_DEV.GET.authorsByName(name))
            .then(response=>response.json())
            .then(data=>{
                let ans =""
                data.authors.map(e=>ans+=formatAuthors(e))
                callback(ans)
    
            })
    }
}


//getAllAuthors()

export {functions}