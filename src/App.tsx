import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routing"; 
import Navigation from "./Components/Nav";
import jelly from "../src/assets/images/jelly.png"

function App() {

  return (
    <div className="App bg-fixed" style={{backgroundImage:`url(${jelly})`}}>
        <BrowserRouter>
            <Navigation/>
          <Router/> 
        </BrowserRouter>
    </div>
  );
}

export default App;