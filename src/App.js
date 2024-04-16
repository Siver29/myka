import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import data from './spotify_data.history.json'
import Aside from './components/Aside.js'
import Header from './components/Header.js';
import getTotalPlays from './functions/KhaledFunctions.js'
import getAllArtiests from './functions/MkFunctions.js'
import Circle from './components/Circle.js';
import Top100TableWrapper from "./components/Top100TableWrapper.js"


console.log(getTotalPlays(data))
function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
          <Aside />
          </div>
          <div className='col-10'>
            <Header songs={getAllArtiests(data)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
