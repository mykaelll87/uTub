const URL = require('url').URL;
exports.extractId= function(url){
    const validate = (id)=>{
        return /^[a-zA-Z0-9-_]{11}$/.test(id)
    }
    try{
        if (validate(url)) { return url }
        else{
            let id = (new URL(url)).searchParams.get('v')
            console.log(id)
            return validate(id)?id:null
        }
    } catch(e){
        console.log("salut")
        return null
    }    
}