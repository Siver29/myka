import React, { useState } from 'react'
import {highestArtistSeason} from "../functions/KhaledFunctions"
import data from '../spotify_data.history.json'
import { top20Songs,extractSongData,extractAlbumData,extractArtistData,top100Albums,top100Artists,artistPercentage, artistRank } from '../functions/YazanFunctions'
import Circle from './Circle'
import ArtistCircle  from './ArtistCircle'
import Top100TableWrapper from './Top100TableWrapper'
import "./ArtistDetailsPage.css"
import Ycard from './Ycard/Ycard'
import { useParams } from 'react-router-dom'

function ArtistDetailsPage() {
  top100Albums("since the beginning")
  const [artist,setArtist] = useState("")

const {type} = useParams();
if(type == "artist")

  return (
    <div className='notSearched'>Search for an Artist</div>
)

  
  
  return (
    <>
      <h1>{type}</h1>
      <div className='Cards'>
        <Ycard title="Plays" value={extractArtistData(type).secondArgument}/>
        <Ycard title="Songs" value={extractArtistData(type).thirdArgument}/>
        <Ycard title="Time Listened" value={extractArtistData(type).fourthArgument}/>
        <Ycard title="Rank" value={`#${artistRank(type)}`}/>
      </div>
      <div className='Circles'>
        <Circle
    labels={["Winter", "Summer", "Spring", "Autumn"]}
    
    data={Object.values(highestArtistSeason(type))}
      />
        <ArtistCircle
    labels={[type, "Other"]}
    
    data={artistPercentage(type)}
      />
      </div>
      <Top100TableWrapper
    changeable={false}
    extractAlbumData={extractAlbumData}
    extractSongData={extractSongData}
    extractArtistData={extractArtistData}
    top100Albums={top100Albums}
    top100Songs={(since) => top20Songs(type,since)}
    top100Artists={top100Artists}
    />
    </>
  )
}

export default ArtistDetailsPage
