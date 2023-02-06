import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routing'; 
import jelly from './assets/images/jelly.png'

function App() {

  return (
    <div className="App">
      <div className='bg-fixed' style={{backgroundImage:`url(${jelly})`}}>
        <BrowserRouter >
          <Router/> 
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;