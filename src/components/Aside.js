import React from 'react'
import './Aside.css'

function Aside() {
  return (
      <nav className='aside'>
          <div>
              <img src='./imgs/logo.png' className='logo'/>
          </div>
          <div>
              <ul>
                  <li className='active'>Home</li>    
                  <li>Artiests</li>    
                  <li>Podcast</li>    
              </ul>
          </div>
      </nav>
  )
}

export default Aside
