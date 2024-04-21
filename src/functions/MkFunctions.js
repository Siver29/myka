import data from '../spotify_data.history.json'
import {extractSongData,top100Songs,getTop100} from './YazanFunctions.js'

 export function getAllSong(data){
    let allUniqueSongs = []
    data.filter(items => {
      if(items.master_metadata_track_name !== null && !allUniqueSongs.includes(items.master_metadata_track_name)){
        const songName = `${items["master_metadata_track_name"]} - ${items["master_metadata_album_artist_name"]}`;
        allUniqueSongs.push(songName)
      }
    })
    return allUniqueSongs
  }
  
  export function getAllArtiests(data){
    let allUniqueArtiests = []
    data.filter(items => {
      if(items.master_metadata_album_artist_name !== null && !allUniqueArtiests.includes(items.master_metadata_album_artist_name)){
        allUniqueArtiests.push(items.master_metadata_album_artist_name)
      }
    })
    return allUniqueArtiests
  }
  
  export function getAllPodcasts(data){
    let allUniquePodcasts = []
    data.filter(items => {
      if(items.episode_show_name !== null && !allUniquePodcasts.includes(items.episode_show_name)){
        allUniquePodcasts.push(items.episode_show_name)
      }
    })
    return allUniquePodcasts
  }
  
  export function songDetails(songName){
      let Rank = "" 
      let songDetailsArray = extractSongData(songName);
      let top100SongsArray = top100Songs('since the beginning');
      if (top100SongsArray.includes(songName)){
          Rank = top100SongsArray.indexOf(songName) + 1
      }else{
          Rank = "UnRanked"
      }
      songDetailsArray.Rank = Rank
      
      return songDetailsArray 
  
  
  }
  export function songsTimePlayDetails (songName,artistName){
    let songTimePlayDetails = []
    data.map(song => {if(song.master_metadata_track_name === songName && song.master_metadata_album_artist_name == artistName){
      songTimePlayDetails.push(
      {
        episodeName : song.master_metadata_track_name,
        episodeStatus :song.reason_end == "trackdone" ? "finished" : "not finished",
        played :  Math.trunc(song.ms_played/1000)+'s',
        date : song.ts.slice(0,10)+ " "+song.ts.slice(12,19),
      })
    }})
    return songTimePlayDetails
  }


  export function getUniqueValues(data) {
    const uniqueSongs = new Set();
    const uniqueArtists = new Set();
    const uniquePodcasts = new Set();
  
    for (const item of data) {
      if (item.master_metadata_track_name !== null) {
        const songName = `${item.master_metadata_track_name} - ${item.master_metadata_album_artist_name}`;
        uniqueSongs.add(songName);
      }
  
      if (item.master_metadata_album_artist_name !== null) {
        uniqueArtists.add(item.master_metadata_album_artist_name);
      }
  
      if (item.episode_show_name !== null) {
        uniquePodcasts.add(item.episode_show_name);
      }
    }
  
    return {
      songs: [...uniqueSongs],
      artists: [...uniqueArtists],
      podcasts: [...uniquePodcasts],
    };
  }

  