import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

const Router = (): JSX.Element => {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}; 

export default Router; 