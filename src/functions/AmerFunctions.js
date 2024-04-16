import data from '../spotify_data.history.json' 

function extractPodcastData(podcastName){
    let resultPodcast= []
    data.map(song =>{
     if(song.episode_show_name ==podcastName){
       resultPodcast.push({
         episodeName :song.episode_name,
         episodeStatus:song.reason_end == "trackdone"? "finished": "not finished",
         played:song.ms_played,
         date:song.ts
       });
     }
    })
    console.log(resultPodcast);
    return resultPodcast;
   }
   function extractSongData(songName){
    let resultSong= []
    data.map(song =>{
     if(song.master_metadata_track_name ==songName){
       resultSong.push({
         episodeName :song.master_metadata_album_album_name,
         episodeStatus:song.reason_end == "trackdone"? "finished": "not finished",
         played:song.ms_played,
         date:song.ts
       });
     }
    })
    console.log(resultSong);
    return resultSong;
   }