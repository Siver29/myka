import React from 'react'
import './Aside.css'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
      <nav className='aside'>
          <div>
              <img src='/imgs/logo (2).png' className='logo'/>
          </div>
          <div>
              <ul>
                  <li><NavLink to='/'> Home</NavLink>    </li>
                  <li><NavLink to='/artist/artist'>Artists</NavLink></li>    
                  <li><NavLink to='/podcast'>Podcast</NavLink></li>    
                  <li><NavLink to='/artist'>Artiests</NavLink></li>    
                  <li><NavLink to='/podcast/podcast'>Podcast</NavLink></li>    
              </ul>
          </div>
      </nav>
  )
}

export default Aside
