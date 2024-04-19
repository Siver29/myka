import data from '../spotify_data.history.json'

  function getSongPlays(songName) {
    const plays =
      data.filter(song => song.master_metadata_track_name == songName)
    return plays.length
  }
  
  export function getTotalPlays() {
    return data.length
  }
  
  
  function getDiffrentTracks() {
    let diffrentTracks = []
  
    diffrentTracks = data.map(song => song.master_metadata_track_name)
    return [...new Set(diffrentTracks)].length
  }
  
  function getTotalTime() {
    let totalTime = 0;
  
    data.map(song => totalTime += song.ms_played)
  
    return totalTime
  }
  function getTotalTimeNonSkipped() {
    let totalTime = 0;
  
    data.map(song => { if (String(song.skipped) == "false") totalTime += song.ms_played })
  
    return totalTime
  }
  
  function avgDailyTimeListening() {
    let dates = [];
    dates = data.map(song => song.ts.slice(0, 10))
  
    let avg = getTotalTimeNonSkipped(data)
  
    return Math.trunc(avg / [...new Set(dates)].length)
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
  
  export function highestSeason() {
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
  
  function artistPrecentage(artistName) {
    let artistPlayes = 0
    data.map(song => { if (song.master_metadata_album_artist_name == artistName) artistPlayes++ })
    return [(getTotalPlays(data) - artistPlayes), artistPlayes]
  }
  
  export function highestArtistSeason(artistName) {
  
    const seasons = {
      winter: 0,
      summer: 0,
      sprint: 0,
      fall: 0
    }
  
    data.map(song => {
      if (song.master_metadata_album_artist_name == artistName) {
        if (song.ts.slice(5, 7) == "12" || song.ts.slice(5, 7) == "01" || song.ts.slice(5, 7) == "02") {
          seasons["winter"] += song.ms_played
        } else if (song.ts.slice(5, 7) == "03" || song.ts.slice(5, 7) == "04" || song.ts.slice(5, 7) == "05") {
          seasons["sprint"] += song.ms_played
        } else if (song.ts.slice(5, 7) == "06" || song.ts.slice(5, 7) == "07" || song.ts.slice(5, 7) == "08") {
          seasons["summer"] += song.ms_played
        } else if (song.ts.slice(5, 7) == "09" || song.ts.slice(5, 7) == "10" || song.ts.slice(5, 7) == "11") {
          seasons["fall"] += song.ms_played
        }
      }
    })
  
    return seasons
  
  }