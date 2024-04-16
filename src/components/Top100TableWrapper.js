import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Top100TableWrapper.css'
import Top100Table from './Top100Table';

function DropdownUI(props) {
    const [header,setHeader] = useState(["Artiest name","Total plays","Total songs","Time played"])
    const[data,setData] = useState(props.top100Artists("since the beginning").map(artist => props.extractArtistData(artist)))
    const [activeKey, setActiveKey] = useState('Artist');
    const [since, setSince] = useState("since the beginning");
    function handleSelect(eventKey,since){
      console.log("since");
      console.log(eventKey);
      if(eventKey === "Song"){
        setHeader(["Song name","Artiest name","Total plays","Time played"])
        setData(props.top100Songs(since).map(song => props.extractSongData(song)))
      }
      else if(eventKey === "Album"){
        setHeader(["Album name","Artiest name","Total songs","Time played"])
        setData(props.top100Albums(since).map(Album => props.extractAlbumData(Album)))
      }
      else if(eventKey === "Artist"){
        setHeader(["Artiest name","Total plays","Total songs","Time played"])
        setData(props.top100Artists(since).map(artist => props.extractArtistData(artist)))
      }
      setActiveKey(eventKey);
    }
    function handleSelectSince(since){
      setSince(since)
      handleSelect(activeKey,since)
    }
  return (

    <>
    <div className='dropRow'>
    {props.changeable ? <Dropdown onSelect={(active)=>handleSelect(active,since)} as={ButtonGroup} data-bs-theme="dark">
        <Dropdown.Toggle  id="dropdown-custom-1">Top 100</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="Artist" active={activeKey === "Artist"}>Artist</Dropdown.Item>
            <Dropdown.Item eventKey="Song" active={activeKey === "Song"}>Song</Dropdown.Item>
            <Dropdown.Item eventKey="Album" active={activeKey === "Album"}>
            Album
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> : <p>Top 20 songs</p>}
      <Dropdown onSelect={handleSelectSince} as={ButtonGroup} data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-custom-1">From</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item  eventKey="last 4 weeks"  active={since === "last 4 weeks"}>The last 4 weeks</Dropdown.Item>
          <Dropdown.Item eventKey="last 6 months"  active={since === "last 6 months"}>The last 6 months</Dropdown.Item>
          <Dropdown.Item eventKey="last year"  active={since === "last year"}>The last year</Dropdown.Item>
          <Dropdown.Item  eventKey="since the beginning" active={since === "since the beginning"}>The beginning</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>{' '}
      </div>
      <Top100Table header={header} data={data}/>
    </>
  );
}





export default DropdownUI
