import data from "../spotify_data.history.json";
export function numberOfPodcast(podcastName) {
  let numberPodcast =[];
  data.map((song) => {
    if (song.episode_show_name && song.episode_show_name.trimEnd() == podcastName && !numberPodcast.includes(song.episode_show_name)) {
      numberPodcast.push(song.episode_name);
    }
  });
  return numberPodcast.length;
}
export function periodtimeOfPodcast(podcastName){
  let periodtime=0
  data.map((song) => {
    if (song.episode_show_name && song.episode_show_name.trimEnd() == podcastName ) {
      periodtime+=(song.ms_played/1000);
    }
  });
  return Math.trunc(periodtime)+"s";
}
export function extractPodcastData(podcastName) {
  let resultPodcast = [];
  data.map(song => {
    if (song.episode_show_name && song.episode_show_name.trimEnd() == podcastName) {
      resultPodcast.push({
        episodeName: song.episode_name,
        episodeStatus:song.reason_end == "trackdone" ? "finished" : "not finished",
        played: Math.trunc(song.ms_played/1000)+'  s',
        date: song.ts.slice(0,10)+ " "+song.ts.slice(12,19),
      });
    }
  });
  return resultPodcast;
}
export function extractSongData(songName) {
  let resultSong = [];
  data.map((song) => {
    if (song.master_metadata_track_name == songName) {
      resultSong.push({
        episodeName: song.master_metadata_album_album_name,
        episodeStatus:
          song.reason_end == "trackdone" ? "finished" : "not finished",
        played: song.ms_played,
        date: song.ts.slice(0,10)+ " "+song.ts.slice(12,19),
      });
    }
  });
  return resultSong;
}
export function highestPodcastSeason(podcastName) {
  
  const seasons = {
    winter: 0,
    summer: 0,
    sprint: 0,
    fall: 0
  }

  data.map(song => {
    if (song.episode_show_name && song.episode_show_name.trimEnd() == podcastName) {
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


