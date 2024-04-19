import React from 'react'
import Ycard from './Ycard/Ycard'
import { getTotalPlays } from '../functions/KhaledFunctions'
import { getDiffrentTracks } from '../functions/KhaledFunctions'
import { getTotalTime } from '../functions/KhaledFunctions'
import { avgDailyTimeListening } from '../functions/KhaledFunctions'
import { highestHour } from '../functions/KhaledFunctions'
import { highestSeason } from '../functions/KhaledFunctions'
import Circle from './Circle.js'
import Top100TableWrapper from './Top100TableWrapper.js'
import './MainPage.css'
import { top100Artists, top100Songs, top100Albums, extractArtistData, extractSongData, extractAlbumData } from "../functions/YazanFunctions.js"


function MainPage() {

  return (
    <div>
    <div className='mainContainer'>
      <div className='cardsContainer'>
        <Ycard value={getTotalPlays()} title="plays :" />
        <Ycard value={getDiffrentTracks()} title="songs :" />
        <Ycard value={getTotalTime()} title="time :" />
        <Ycard value={avgDailyTimeListening()} title="average :" />
        <Ycard value={highestHour()} title="highest hour :" />
      </div>
      <div>
        <Circle
          labels={["Winter", "Summer", "Spring", "Autumn"]}

          data={Object.values(highestSeason())}
        />
      </div>
      </div>
      <div>
      <Top100TableWrapper
        changeable={true}
        extractAlbumData={extractAlbumData}
        extractSongData={extractSongData}
        extractArtistData={extractArtistData}
        top100Albums={top100Albums}
        top100Songs={top100Songs}
        top100Artists={top100Artists}
      />

      </div>
    </div>

  )
}

export default MainPage
