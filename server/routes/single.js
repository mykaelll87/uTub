const express = require('express');
const router = express.Router();
const key = require('fs').readFileSync("./keys/YoutubeAPI").toString();
const ytInfo = require('googleapis').google.youtube({
    version: "v3",    
});
const ytdl = require('ytdl-core');
const FFMpeg = require('fluent-ffmpeg');
const youtubeUtil = require('../utils/youtubeInfo');

async function getInfo(id){
    let options = {
        maxResults: 1,
        part: 'snippet',
        id: id,
        key: key
    }
    return parseInfo(await ytInfo.videos.list(options))
}
function parseInfo(googleResponse){
    if(googleResponse.data.items.length ===1){
        let res = googleResponse.data.items[0]
        return youtubeUtil.formatSong(res)
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
        if (u){
            let downloadStream = ytdl(u, downloadOptions)
            downloadStream.on("response", (response)=>{
                res.setHeader("content-length", response.headers["content-length"]);
            });
            downloadStream.on('info', (info)=>{
                console.log(info.player_response.videoDetails);
                res.setHeader("content-type", "audio/mpeg");
                res.setHeader("content-disposition", `attachment; filename=${info.player_response.videoDetails.title}.mp3`)
            })
            let convertStream = new FFMpeg(downloadStream)
            convertStream.format("mp3").pipe(res)
            res.on("close", ()=>{downloadStream.destroy(); convertStream.destroy();})

            // (new FFMpeg(ytdl(u, downloadOptions), downloadOptions)).format("mp3").pipe(res);
        }
        else {
            console.error(req.params);
            res.sendStatus(400);
        }
        // let stream = ytdl(u, downloadOptions)
        // stream.on("response", (response)=>{
        //     res.setHeader("content-type", response.headers["content-type"])
        //     res.setHeader("content-length", response.headers["content-length"])
        // })
        
    } catch(e){
        console.error(e)
        res.sendStatus(500)
    }
})

router.post("/download", function(req, res){
    try{
        let {id, title} = req.body;
        // let id = decodeURIComponent(req.body.id)
        
        if (id && title){
            let downloadStream = ytdl(id, downloadOptions)
            downloadStream.on("response", (response)=>{
                res.setHeader("content-type", "audio/mpeg");
                res.setHeader("content-length", response.headers["content-length"]);
                res.setHeader("content-disposition", `attachment; filename='${title}.mp3'`)
            })
            let convertStream = new FFMpeg(downloadStream)
            convertStream.format("mp3").pipe(res)
            // (new FFMpeg(ytdl(u, downloadOptions), downloadOptions)).format("mp3").pipe(res);
        }
        else {
            console.error(req.body);
            res.sendStatus(400);
        }
        // let stream = ytdl(u, downloadOptions)
        // stream.on("response", (response)=>{
        //     res.setHeader("content-type", response.headers["content-type"])
        //     res.setHeader("content-length", response.headers["content-length"])
        // })
        
    } catch(e){
        console.error(e)
        res.sendStatus(500)
    }
})

module.exports = router;