import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import PantryPalsPlanning from './Components/Projects/PantryPalsPlanning'


const Router = () => {
  return (

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} /> 
      <Route path='/pantryPalsPlanning' element={<PantryPalsPlanning/>}/>
    </Routes>

  )
}

export default Router