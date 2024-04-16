import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside.js'
import Header from './components/Header.js';




function App() {

  return (
    <div className="App">
        <div className='container-fluid'>
          <div className='row allRow'>
            <div className='col-2'><Aside /></div>
            <div className='col-10'><Header /></div>
          </div>
        </div>
    </div>
  );
}

export default App;
