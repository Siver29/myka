import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import data from '../spotify_data.history.json'
import { getAllSong ,getAllArtiests,getAllPodcasts} from '../functions/MkFunctions'
import { useLocation } from 'react-router-dom';




const Header = (props) => {


  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();

  let searchFun = getAllSong(data)
  if (location.pathname.slice(0,7) == '/artist'){
    searchFun = getAllArtiests(data)
  }else if(location.pathname.slice(0,8) == '/podcast'){
    searchFun = getAllPodcasts(data)
  }else{
    searchFun = getAllSong(data)
  }
  

    const addAllSearchValue = () => {
      if (searchFun) {
      const newOptions = searchFun.map(song => ({ label: song, value: song }));
      setOptions(newOptions);
      }
    };
    useEffect(() => {
      addAllSearchValue();
    }, [location]);
  


    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      if(location.pathname.slice(0,7) == '/artist')
        window.location.href = `/artist/${selectedOption.value}`;
      else if(location.pathname.slice(0,8) == '/podcast')
        window.location.href = `/podcast/${selectedOption.value}`;
      else
        window.location.href = `/song/${selectedOption.value}`;
    };

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#FC244C" : null,
        color: isFocused ? "white" : "black"
      };
    }
  };
  return (
    <header className='container-fluid'>
      <div className='row'>
      <div className='col-6'>
        <Select 
        placeholder="search for song"
        options={options}
        onChange={handleChange}
        className='select'
        styles={colourStyles}
        />
      </div>
      <div className='col-6'>
        <div className='row'>
          <div className='col-6'></div>
          <div className='col-4 userName'>
            <p>Rafael Alegra</p>
          </div>
          <div className='col-2'>
          <div className='userPhoto'>
            <a href='/imgs/Rafael.png' target='_blank'>
              <img src='/imgs/Rafael.png' />
            </a>
          </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header