import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import data from './spotify_data.history.json'
import Aside from './components/Aside.js'
import Header from './components/Header.js';
import getTotalPlays from './functions/KhaledFunctions.js'
import getAllArtiests from './functions/MkFunctions.js'
import Top100Table from './components/Top100Table.js'
import Circle from './components/Circle.js';
import Top100TableWrapper from "./components/Top100TableWrapper.js"
import {top100Artists,getTop100} from './functions/YazanFunctions.js'

console.log(top100Artists("since the beginning"))

function App() {
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
                  <Header songs={getAllArtiests(data)}/>
                </div>
                <div className='col-12'>
                  
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
