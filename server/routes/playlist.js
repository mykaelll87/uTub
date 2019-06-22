const router = require('express').Router();
const key = require('fs').readFileSync('./keys/YoutubeAPI');
const ytInfo = require('googleapis').google.youtube("v3");
const ytdl = require('ytdl-core');
const FFMpeg = require('fluent-ffmpeg');
const youtubeUtils = require('../utils/youtubeInfo');
const archiver = require('archiver')

const BASE_OPTIONS = {
  'maxResults': 25,
  'part': 'snippet,contentDetails',
  'key': key
}

let getInfos = async (options) => {
  let options = {
    ...BASE_OPTIONS,
    ...options
  }

  const googleRes = await ytInfo.playlistItems.list(options);

  return formatPlaylist(googleRes);
}

let formatPlaylist = (googleRes) => {

  let songs = googleRes.items.map(youtubeUtils.formatSong);

  return {
    prevPage: googleRes.prevPageToken,
    nextPage: googleRes.nextPageToken,
    songs
  }
}

router.get("/info/:id", async (req, res) => {
  try {
    const infos = await getInfos({
      playlistId: req.params.id,
    });

    res.status(200).send(infos);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/info/:id/:pageId', async (req, res) => {
  try {
    const { id, pageId } = req.params
    const options = {
      playlistId: id,
      pageToken: pageId
    }
    const infos = await getInfos(options);

    res.status(200).send(infos);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const dowloadOptions = {
  filter: "audioonly"
};

router.post('/dl', (req, res) => {
  const zip = new archiver('zip');

  let filelength = 0;
  
  zip.pipe(res);
  try {
    res.setHeader("content-type", "application/zip")
    res.setHeader("content-disposition", "attachment; filename='utubeDownload.zip'")
    zip.on('error', (err)=>{throw err});

    req.body.forEach((entry)=>{
      if(entry.id){
        const download = ytdl(entry.id, downloadOptions);
        download.on('response', res=>{
          filelength+= res.headers["content-length"];
          res.setHeader('content-length', filelength);
        });

        const convert = new FFMpeg(download);
        zip.append(convert.format("mp3"), {name: `${entry.titre}.mp3`});
      }
    });

    zip.finalize();
  } catch (ex) {
    console.error(ex);
    res.sendStatus(500);
  }
});