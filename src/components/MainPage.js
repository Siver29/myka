import React from 'react'
import Ycard from './Ycard/Ycard'
import {getTotalPlays} from '../functions/KhaledFunctions'
import {top100Artists,top100Songs,top100Albums,extractArtistData,extractSongData,extractAlbumData} from "../functions/YazanFunctions.js"


function MainPage() {

  return (
    <div>
      <Ycard value={getTotalPlays()} title="Number of plays"/>
    </div>
  )
}

export default MainPage
