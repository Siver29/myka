import data from '../spotify_data.history.json'
import {extractSongData,top100Songs,getTop100} from './YazanFunctions.js'

 export function getAllSong(data){
    let allUniqueSongs = []
    data.filter(items => {
      if(items.master_metadata_track_name !== null && !allUniqueSongs.includes(items.master_metadata_track_name)){
        allUniqueSongs.push(items.master_metadata_track_name)
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
      console.log(Rank)
      songDetailsArray.Rank = Rank
      
      return songDetailsArray 
  
  
  }
  export function songsTimePlayDetails (songName){
    let songTimePlayDetails = []
    data.map(song => {if(song.master_metadata_track_name === songName){
      songTimePlayDetails.push(
      {
        episodeName : song.master_metadata_track_name,
        episodeStatus : song.reason_end,
        played : song.ms_played,
        date : song.ts,
      })
    }})
    return songTimePlayDetails
  }