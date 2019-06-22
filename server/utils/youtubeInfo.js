const URL = require('url').URL;
exports.extractId= function(url){
    const validate = (id)=>{
        return /^[a-zA-Z0-9-_]{11}$/.test(id)
    }
    try{
        if (validate(url)) { return url }
        else{
            let id = (new URL(url)).searchParams.get('v')
            return validate(id)?id:null
        }
    } catch(e){
        console.error(e)
        return null
    }    
}

exports.formatSong=function(song){
    return {
        id: song.id,
        title: song.snippet.title,
        thumbnail: song.snippet.thumbnails.medium.url,
        artist: song.snippet.channelTitle
    }
}