import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

const Router = (): JSX.Element => {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}; 

export default Router; 