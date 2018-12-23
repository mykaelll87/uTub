const express = require('express');
const router = express.Router();
const ytInfo = require('googleapis').google.youtube("v3");
const ytdl = require('ytdl-core');
const key = require('fs').readFileSync("../keys/YoutubeAPI").toString();
const youtubeUtil = require('../utils/youtubeInfo');

async function getInfo(id){
    let options = {
        maxResults: 1,
        part: 'snippet',
        id: id,
        key : key
    }
    return parseInfo(await ytInfo.videos.list(options))
}
function parseInfo(googleResponse){
    if(googleResponse.data.items.length ===1){
        let res = googleResponse.data.items[0]
        return {
            id: res.id,
            title: res.snippet.title,
            thumbnail: res.snippet.thumbnails.medium.url,
            artist: res.snippet.channelTitle
        }
    } else {
        throw new Exception("No Video Found")
    }
    
}

router.get("/info/:u", async function (req, res){
    try{
        let u = decodeURIComponent(req.params.u);
        let id = youtubeUtil.extractId(u);
        if (id){
            let infos = await getInfo(id)
            res.status(200).send(infos)
        } else {
            res.sendStatus(400)
        }        
    } catch(e){
        console.error(e)
        res.sendStatus(500)
    }
});

const downloadOptions = {
    filter:"audioonly"
}
router.get("/download/:u", function(req, res){
    try{
        let u = decodeURIComponent(req.params.u)
        let stream = ytdl(u, downloadOptions)
        // stream.on("response", (response)=>{
        //     res.setHeader("content-type", response.headers["content-type"])
        //     res.setHeader("content-length", response.headers["content-length"])
        // })
        stream.pipe(res)
    } catch(e){
        console.error(e)
        res.sendStatus(500)
    }
})



module.exports = router;