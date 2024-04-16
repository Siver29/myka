import React from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];
  
  const Header = () => {
    const handleChange = (selectedOption) => {
      console.log(selectedOption);
    };
    const colourStyles = {
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isFocused ? "#FC244C" : null,
          color: "black"
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
            <img src='./imgs/Rafael.png' />
          </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
