import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Header from './Header'
import { getAllSong ,getAllArtiests,getAllPodcasts} from '../functions/MkFunctions'
import data from '../spotify_data.history.json'
function Layout() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
          <Aside />
          </div>
          <div className='col-10'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <Header songs={getAllSong(data)}/>
                </div>
                <div className='col-12'>
                    <Outlet/>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
