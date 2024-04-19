import React from 'react'
import Ycard from './Ycard/Ycard'
import {getTotalPlays} from '../functions/KhaledFunctions'
import {top100Artists,top100Songs,top100Albums,extractArtistData,extractSongData,extractAlbumData} from "../functions/YazanFunctions.js"
import data from "../spotify_data.history.json"

function MainPage() {

  return (
    <div>
      <Ycard value={getTotalPlays()} title="Plays"/>
    </div>
  )
}

export default MainPage
