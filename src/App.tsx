import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routing'; 

function App() {
  return (
    <div className="font-medium">
      <BrowserRouter>
        <Router/> 
      </BrowserRouter>
    </div>
  );
}

export default App;