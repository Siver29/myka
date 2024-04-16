import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside.js'
import Header from './components/Header.js';
import data from './spotify_data.history.json';

//details play times
function getSongPlays(songName, data) {
  const plays =
    data.filter(song => song.master_metadata_track_name == songName)
  return plays.length
}

function getTotalPlays(data) {
  return data.length
}

function getDiffrentTracks(data) {
  let diffrentTracks = []

  diffrentTracks = data.map(song => song.master_metadata_track_name)
  return [...new Set(diffrentTracks)].length
}

function getTotalTime(data) {
  let totalTime = 0;

  data.map(song => totalTime += song.ms_played)

  return totalTime
}

function avgDailyTimeListening(data) {
  let dates = [];
  dates = data.map(song => song.ts.slice(0, 10))
  let obj = {}
  for (let i = 0; i < dates.length; i++) {
    obj[dates[i]] = 0
  }
  for (let i = 0; i < data.length; i++) {
    obj[data[i].ts.slice(0, 10)] += data[i].ms_played;
  }
  let avg = 0
  for (let i = 0; i < dates.length; i++) {
    avg += obj[dates[i]];
  }
  console.log(dates);
 
  return Math.trunc(avg / dates.length)
}

function highestHour(data) {


  const hourCounts = {};

  data.forEach((song) => {
    const timestamp = new Date(song.ts);
    const hour = timestamp.getUTCHours();

    hourCounts[hour] = (hourCounts[hour] || 0) + song.ms_played;
  });

  let maxHour = -1;
  let maxCount = 0;

  for (const hour in hourCounts) {
    if (hourCounts[hour] > maxCount) {
      maxCount = hourCounts[hour];
      maxHour = hour;
    }
  }
  return maxHour
}

function highestSeason(data) {
  const seasons = {
    winter: 0,
    summer: 0,
    sprint: 0,
    fall: 0
  }

  data.map(song => {
    if (song.ts.slice(5, 7) == "12" || song.ts.slice(5, 7) == "01" || song.ts.slice(5, 7) == "02") {
      seasons["winter"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "03" || song.ts.slice(5, 7) == "04" || song.ts.slice(5, 7) == "05") {
      seasons["sprint"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "06" || song.ts.slice(5, 7) == "07" || song.ts.slice(5, 7) == "08") {
      seasons["summer"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "09" || song.ts.slice(5, 7) == "10" || song.ts.slice(5, 7) == "11") {
      seasons["fall"] += song.ms_played
    }
  })

  let maxSeason = -1;
  let maxCount = 0;

  for (const season in seasons) {
    if (seasons[season] > maxCount) {
      maxCount = seasons[season];
      maxSeason = season;
    }
  }
  return maxSeason
 
}

/*mk functions*/
function getAllSong(data){
  let allUniqueSongs = []
  data.filter(items => {
    if(items.master_metadata_track_name !== null && !allUniqueSongs.includes(items.master_metadata_track_name)){
      allUniqueSongs.push(items.master_metadata_track_name)
    }
  })
  return allUniqueSongs
}

function getAllArtiests(data){
  let allUniqueArtiests = []
  data.filter(items => {
    if(items.master_metadata_album_artist_name !== null && !allUniqueArtiests.includes(items.master_metadata_album_artist_name)){
      allUniqueArtiests.push(items.master_metadata_album_artist_name)
    }
  })
  return allUniqueArtiests
}

function getAllPodcasts(data){
  let allUniquePodcasts = []
  data.filter(items => {
    if(items.episode_show_name !== null && !allUniquePodcasts.includes(items.episode_show_name)){
      allUniquePodcasts.push(items.episode_show_name)
    }
  })
  return allUniquePodcasts
}

console.log(getAllPodcasts(data))



function App() {
  return (
    <div className="App">
        <div className='container-fluid'>
          <div className='row allRow'>
            <div className='col-2'><Aside /></div>
            <div className='col-10'><Header songs={getAllArtiests(data)}/></div>
          </div>
        </div>
    </div>
  );
}

export default App;
