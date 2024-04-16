import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import data from './spotify_data.history.json'
import Aside from './components/Aside.js'
import Header from './components/Header.js';
import getTotalPlays from './functions/KhaledFunctions.js'
import getAllArtiests from './functions/MkFunctions.js'
import Top100Table from './components/Top100Table.js'
import Circle from './components/Circle.js';
import Top100TableWrapper from "./components/Top100TableWrapper.js"


console.log(getTotalPlays(data))
import Ycard from './components/Ycard/Ycard';
import Table3 from './components/Table3/Table3';
import data from "./spotify_data.history.json"

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
function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
          <Aside />
          </div>
          <div className='col-10'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <Header songs={getAllArtiests(data)}/>
                </div>
                <div className='col-12'>
                  
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
