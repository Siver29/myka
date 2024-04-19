import {songDetails,songsTimePlayDetails} from '../functions/MkFunctions.js'
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ycard from './Ycard/Ycard';
import Table3 from './Table3/Table3';

const CLIENT_ID = "5f76e87494884cb1ba1da0fadf1422e4";
const CLIENT_SECRET = "84f01bc0a1514fb5b1731f5d906c9807";


function SongPage() {
  const [accessToken, setAccessToken] = useState("");
  const [id, setId] = useState("");
  const { type } = useParams();
  const songDetail = songDetails(type)

  let authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
    };
  let reqParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  useEffect(() => {
    async function getToken() {
      try {
        let response = await fetch("https://accounts.spotify.com/api/token", authParams)
        response = await response.json()
        setAccessToken(response.access_token)
      } catch (error) {
        setAccessToken("couldn't get token");
        console.log(error);
      }
    }
    async function getID() {
      try {
        let response = await fetch(
          `https://api.spotify.com/v1/search?q=${type}&type=track`,
          reqParams
        )
        response = await response.json();
        setId(response.tracks.items[0].id)
      } catch (error) {
        
      }
    }
    if (accessToken == "")
     getToken();
    else if(accessToken == "couldn't get token")
      return
    else
     getID();
  }, [accessToken]);
  console.log(songsTimePlayDetails(type))
  return (
    <div>
      <Ycard title={'Rank'} value={songDetail.Rank}/>
      <Ycard title={'Artiest Name'} value={songDetail.secondArgument}/>
      <Ycard title={'Plays'} value={songDetail.thirdArgument}/>
      <Ycard title={'Play Time'} value={songDetail.fourthArgument}/>
      {accessToken !== "couldn't get token" ? <iframe
   style={{ borderRadius: "12px" }}
   src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
   width="100%"
   height="352"
   frameBorder="0"
   allowFullScreen=""
   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
   loading="lazy"
 ></iframe>: ""}
  <Table3 header={["Num","Status","Spent Time","Date"]} data={songsTimePlayDetails(type)} />
    </div>
  )
}

export default SongPage
