import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Circle from './components/Circle';
import Top100TableWrapper from './components/Top100TableWrapper'
import data from './spotify_data.history.json'



function highestSeason(data) {
  const seasons = {
    winter: 0,
    summer: 0,
    spring: 0,
    fall: 0
  }

  data.map(song => {
    if (song.ts.slice(5, 7) == "12" || song.ts.slice(5, 7) == "01" || song.ts.slice(5, 7) == "02") {
      seasons["winter"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "03" || song.ts.slice(5, 7) == "04" || song.ts.slice(5, 7) == "05") {
      seasons["spring"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "06" || song.ts.slice(5, 7) == "07" || song.ts.slice(5, 7) == "08") {
      seasons["summer"] += song.ms_played
    } else if (song.ts.slice(5, 7) == "09" || song.ts.slice(5, 7) == "10" || song.ts.slice(5, 7) == "11") {
      seasons["fall"] += song.ms_played
    }
  })
  return [seasons["winter"],seasons["spring"], seasons["summer"],seasons["fall"]]
}

function getTop100(Obj) {
  const dataArray = Object.entries(Obj);

  dataArray.sort((a, b) => b[1] - a[1]);

  const top100 = dataArray.slice(0, 100);
  console.log(top100);

  const top100Names = top100.map(([item]) => item);

  return top100Names;
}

function top100Artists(since){
  let obj = {};
  let dateSince;
  if(since == "since the beginning"){
    data.forEach(song => {
      if(song["master_metadata_album_artist_name"])
        obj[song["master_metadata_album_artist_name"]] = (obj[song["master_metadata_album_artist_name"]] || 0) + 1;
    });
    return getTop100(obj)
  }
  else if( since == "last year"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
  }
  else if(since == "last 6 months"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
  }
  else if(since = "last 4 weeks"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
  }
  let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
  filteredData.forEach(song => {
    if(song["master_metadata_album_artist_name"])
      obj[song["master_metadata_album_artist_name"]] = (obj[song["master_metadata_album_artist_name"]] || 0) + 1;
  });
  return getTop100(obj)  
}
function top100Songs(since){
  let obj = {};
  let dateSince;
  if(since == "since the beginning"){
    data.forEach(song => {
      if(song["master_metadata_track_name"]){

        obj[song["master_metadata_track_name"]] = (obj[song["master_metadata_track_name"]] || 0) + song.ms_played;
      
      }
    });
    return getTop100(obj)
  }
  else if( since == "last year"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
  }
  else if(since == "last 6 months"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
  }
  else if(since = "last 4 weeks"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
  }
  let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
  filteredData.forEach(song => {
    if(song["master_metadata_track_name"])
      obj[song["master_metadata_track_name"]] = (obj[song["master_metadata_track_name"]] || 0) + song.ms_played;
  });
  return getTop100(obj)  
}
function top100Albums(since){
  let obj = {};
  let dateSince;
  if(since == "since the beginning"){
    data.forEach(song => {
      if(song["master_metadata_album_album_name"]){

        obj[song["master_metadata_album_album_name"]] = (obj[song["master_metadata_album_album_name"]] || 0) + song.ms_played;
      
      }
    });
    return getTop100(obj)
  }
  else if( since == "last year"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
  }
  else if(since == "last 6 months"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
  }
  else if(since = "last 4 weeks"){
    const currentDate = new Date();
    dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
  }
  let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
  filteredData.forEach(song => {
    if(song["master_metadata_album_album_name"])
      obj[song["master_metadata_album_album_name"]] = (obj[song["master_metadata_album_album_name"]] || 0) + song.ms_played;
  });
  console.log(getTop100(obj));
  return getTop100(obj)  
}
function extractArtistData(artistName){
  let totalPlays = data.filter(song => song.master_metadata_album_artist_name == artistName).length
  let totalSongs = []
  data.forEach(song => {
    if(song.master_metadata_album_artist_name == artistName && !totalSongs.includes(song.master_metadata_track_name))
    totalSongs.push(song.master_metadata_track_name)
  })

  let timePlayed = data.reduce((acc,curr)=>{
    if(curr.master_metadata_album_artist_name == artistName)
      return acc+curr.ms_played
    return acc
  },0)
  return {
    firstArgument : artistName,
    secondArgument : totalPlays,
    thirdArgument : totalSongs.length,
    fourthArgument: `${Math.trunc(timePlayed/1000)}s`
  }
}


function extractSongData(song){

  let artistName = data.find(element => element.master_metadata_track_name == song).master_metadata_album_artist_name
  let totalPlays = data.filter(element => element.master_metadata_track_name == song).length
  let timePlayed = data.reduce((acc,curr)=>{
    if(curr.master_metadata_track_name == song)
      return acc+curr.ms_played
    return acc
  },0)
  return {
    firstArgument : song,
    secondArgument : artistName,
    thirdArgument : totalPlays,
    fourthArgument: `${Math.trunc(timePlayed/1000)}s`
  }
}
function extractAlbumData(album){
  let artistName = data.find(song => song.master_metadata_album_album_name == album).master_metadata_album_artist_name
  let totalSongs = []
  data.map(song =>{
    if(song.master_metadata_album_album_name == album && !totalSongs.includes(song))
      totalSongs.push(song)
  })
  let timePlayed = data.reduce((acc,curr)=>{
    if(curr.master_metadata_album_album_name == album)
      return acc+curr.ms_played
    return acc
  },0)
  return {
    firstArgument : album,
    secondArgument : artistName,
    thirdArgument : totalSongs.length,
    fourthArgument: `${Math.trunc(timePlayed/1000)}s`
  }
}

function top20Songs(artist){
  
}






function App() {

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Layout/>}>
    //         <Route path='/main' element={<main/>}/>
    //         <Route path='/podcast' element={<Podcast/>}/>
    //         <Route path='/artist' element={<Artist/>}/>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
      <Circle labels={["winter","summer","Spring","Autumn"]} data={highestSeason(data)}/>
      <Top100TableWrapper changeable={false} extractAlbumData={extractAlbumData} extractSongData={extractSongData} extractArtistData={extractArtistData} top100Albums={top100Albums} top100Songs={top100Songs} top100Artists={top100Artists}/>
    </>

  );
}

export default App;
