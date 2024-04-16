import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
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
      {/* <BrowserRouter>
        <Routes>
          <Route path='/artist' element={<Artist/>}/>
          <Route path='/podcast' element={<Podcast/>}/>
          <Route path='/artist' element={<Artist/>}/>
          <Route path='/artist' element={<Artist/>}/>
        </Routes>
      </BrowserRouter> */}
      <Ycard />
      <h1>hi: </h1>
      
      <Table3 data={extractPodcastData("The Misfits Podcast")} header={["Episode title","Episode status","Played","Date"]}/>
      <Table3 data={extractSongData("Antidote")} header={["Album title","Episode Status","Played","Date"]}/>
    </div>
  );
}

export default App;
