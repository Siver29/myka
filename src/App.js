import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/artist' element={<Artist/>}/>
          <Route path='/podcast' element={<Podcast/>}/>
          <Route path='/artist' element={<Artist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
