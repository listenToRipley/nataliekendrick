import React from "react"; 
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import RoutingError from "./Components/404";

const Router = (): JSX.Element => {

  return ( 
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/404" element={<RoutingError/>}/>
      <Route path="/*" element={<Navigate replace to="/404"/>}/>
    </Routes>
  )
}; 

export default Router; 