import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';

const Router = (): JSX.Element => {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  )
}; 

export default Router; 