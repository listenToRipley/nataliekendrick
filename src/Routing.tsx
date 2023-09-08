import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import CodeSamples from "./Components/CodeSamples";

const Router = (): JSX.Element => {

  //TODO: Need to add redirect for failed paths.

  return ( 
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Project/>}/>
        {/*<Route path="/code-samples" element={<CodeSamples/>} />*/}
    </Routes>
  )
}; 

export default Router; 