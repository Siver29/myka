import React from 'react'
import Ycard from './Ycard/Ycard'
import {numberOfPodcast,periodtimeOfPodcast,extractPodcastData,highestPodcastSeason} from '../functions/AmerFunctions'
import {getTotalPlays} from '../functions/KhaledFunctions'
import {top100Artists,top100Songs,top100Albums,extractArtistData,extractSongData,extractAlbumData} from "../functions/YazanFunctions.js"
import Table3 from './Table3/Table3.js'
import "./PodcastPage.css"
import { useParams } from 'react-router-dom'
import Circle from './Circle.js'
function PodcastPage() {
  const {type}=useParams();
 
  if(type=='podcast'){
    return (
      <div className='notSearched'>Search for a Podcast</div>
    )
  }
  return (
    <div>
      <div>
        <h1>{type}</h1>
        <div className='displayFlex margin'>
          <Ycard value={numberOfPodcast(type)} title="Number of Episodes:"/>
          <Ycard value={periodtimeOfPodcast(type)} title="Time Listened:"/>
          <Circle labels={["Winter", "Summer", "Spring", "Autumn"]} data={Object.values(highestPodcastSeason(type))}/>
        </div>
      <Table3 header={["Episode Title","status","spent Time","date"]} data={extractPodcastData(type)} />
      </div>
    </div>
  )
}

export default PodcastPage
