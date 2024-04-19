import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { Navigate } from 'react-router-dom';


const Header = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const addAllSongs = () => {
    if (props.songs) {
      const newOptions = props.songs.map(song => ({ label: song, value: song }));
      setOptions(newOptions);
    }
  };
  useEffect(() => {
    addAllSongs();
  }, []);


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);


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
                <a href='./imgs/Rafael.png' target='_blank'>
                  <img src='./imgs/Rafael.png' />
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
