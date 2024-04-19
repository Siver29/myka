import data from '../spotify_data.history.json'

function getTop100(Obj) {
    const dataArray = Object.entries(Obj);
  
    dataArray.sort((a, b) => b[1] - a[1]);
  
    const top100 = dataArray.slice(0, 100);
  
  
    const top100Names = top100.map(([item]) => item);
  
    return top100Names;
  }
  
  
  export function top100Artists(since){
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
    else if(since == "last 4 weeks"){
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





  export function top100Songs(since) {
    let obj = {};
    let dateSince;
    if (since == "since the beginning") {
      data.forEach(song => {
        if(song["master_metadata_track_name"]){
          const key = `${song["master_metadata_track_name"]} - ${song["master_metadata_album_artist_name"]}`;
          obj[key] = (obj[key] || 0) + song.ms_played;
        }
      });
      return getTop100(obj);
    } else if (since == "last year") {
      const currentDate = new Date();
      dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
    } else if (since == "last 6 months") {
      const currentDate = new Date();
      dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
    } else if (since == "last 4 weeks") {
      const currentDate = new Date();
      dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
    }
    let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
    filteredData.forEach(song => {
      if(song["master_metadata_track_name"]){
        const key = `${song["master_metadata_track_name"]} - ${song["master_metadata_album_artist_name"]}`;
        obj[key] = (obj[key] || 0) + song.ms_played;
      }
    });
    return getTop100(obj);
  }





  export function top100Albums(since){
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
    return getTop100(obj)  
  }




  export function extractArtistData(artistName){
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
  
  
  export function extractSongData(songData) {
    const parts = songData.split(' - ');
    const artistName = parts.pop();
    const trackName = parts.join(" - ")
  
    const matchingSongs = data.filter(
      (element) =>
        element.master_metadata_track_name === trackName &&
        element.master_metadata_album_artist_name === artistName
    );
  
    const totalPlays = matchingSongs.length;
    const timePlayed = matchingSongs.reduce((acc, curr) => acc + curr.ms_played, 0);
  
    return {
      firstArgument: trackName,
      secondArgument: artistName,
      thirdArgument: totalPlays,
      fourthArgument: `${Math.trunc(timePlayed / 1000)}s`
    };
  }
 export function extractAlbumData(album){
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
  
  export function top20Songs(artist,since){
    let obj = {};
    let dateSince;
    if(since == "since the beginning"){
      data.forEach(song => {
        if(song["master_metadata_album_artist_name"] ==artist){
          const key = `${song["master_metadata_track_name"]} - ${song["master_metadata_album_artist_name"]}`;
          obj[key] = (obj[key] || 0) + song.ms_played;
        }
      });
      let top20 =getTop100(obj).slice(0,20)
      return top20      
    }
    const currentDate = new Date();
    if( since == "last year"){
      dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
    }
    else if(since == "last 6 months"){
      dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
    }
    else if(since = "last 4 weeks"){
      dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
    }
    let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
    filteredData.forEach(song => {
      if(song["master_metadata_album_artist_name"] ==artist){
        const key = `${song["master_metadata_track_name"]} - ${song["master_metadata_album_artist_name"]}`;
        obj[key] = (obj[key] || 0) + song.ms_played;
      }
    });
    let top20 =getTop100(obj).slice(0,20)
    return top20
  }


  export function artistPercentage(artist){
    let numberOfPlaysForArtist =0;
    data.map(song => {
      if(song.master_metadata_album_artist_name == artist)
        numberOfPlaysForArtist++
    })

    return [numberOfPlaysForArtist,data.length-numberOfPlaysForArtist]

  }


  export function artistRank(artist){
    let top100 = top100Artists("since the beginning")
    if(top100.includes(artist))
      return top100.indexOf(artist)+1
    return "Not Ranked"
  }
  
  