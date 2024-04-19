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

  
  
setArtist(type)
  return (
    <>
      <h1>{artist}</h1>
      <div className='Cards'>
        <Ycard title="Plays" value={extractArtistData(artist).secondArgument}/>
        <Ycard title="Songs" value={extractArtistData(artist).thirdArgument}/>
        <Ycard title="Time Listened" value={extractArtistData(artist).fourthArgument}/>
        <Ycard title="Rank" value={`#${artistRank(artist)}`}/>
      </div>
      <div className='Circles'>
        <Circle
    labels={["Winter", "Summer", "Spring", "Autumn"]}
    
    data={Object.values(highestArtistSeason(artist))}
      />
        <ArtistCircle
    labels={[artist, "Other"]}
    
    data={artistPercentage(artist)}
      />
      </div>
      <Top100TableWrapper
    changeable={false}
    extractAlbumData={extractAlbumData}
    extractSongData={extractSongData}
    extractArtistData={extractArtistData}
    top100Albums={top100Albums}
    top100Songs={(since) => top20Songs(artist,since)}
    top100Artists={top100Artists}
    />
    </>
  )
}

export default ArtistDetailsPage
