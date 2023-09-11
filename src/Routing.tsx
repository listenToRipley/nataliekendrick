import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import RoutingError from "./Components/404";
import { Redirect } from "react-router-dom";

const Router = (): JSX.Element => {

  //TODO: Need to add redirect for failed paths.

  return ( 
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/404" element={<RoutingError/>}/>
      <Redirect to="/404"/>
    </Routes>
  )
}; 

export default Router; 