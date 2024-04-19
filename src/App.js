import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Circle from "./components/Circle";
import Top100TableWrapper from "./components/Top100TableWrapper";
import data from "./spotify_data.history.json";
import { useEffect, useState } from "react";
import Aside from './components/Aside.js'
import Header from './components/Header.js';
import getTotalPlays from './functions/KhaledFunctions.js'
import getAllArtiests from './functions/MkFunctions.js'
import Top100Table from './components/Top100Table.js'
import Ycard from './components/Ycard/Ycard';
import Table3 from './components/Table3/Table3';
import MainPage from './components/MainPage.js'
import Layout from "./components/Layout.js";
import SongPage from "./components/SongPage.js";
import PodcastPage from "./components/PodcastPage.js";
import ArtistDetailsPage from "./components/ArtistDetailsPage.js";



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="main" element={<MainPage/>}/>
          <Route path="artist" element={<ArtistDetailsPage/>}/>
          <Route path="podcast" element={<PodcastPage/>}/>
          <Route path="song/:type" element={<SongPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

//   <iframe
//   style={{ borderRadius: "12px" }}
//   src={`https://open.spotify.com/embed/track/?utm_source=generator`}
//   width="100%"
//   height="352"
//   frameBorder="0"
//   allowFullScreen=""
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//   loading="lazy"
// ></iframe>
// {/* <Circle
//   labels={["winter", "summer", "Spring", "Autumn"]}
//   data={highestSeason(data)}
// /> */}
// <Top100TableWrapper
//   changeable={true}
//   extractAlbumData={extractAlbumData}
//   extractSongData={extractSongData}
//   extractArtistData={extractArtistData}
//   top100Albums={top100Albums}
//   top100Songs={top100Songs}
//   top100Artists={top100Artists}
// />