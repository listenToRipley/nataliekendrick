import './App.css';
import React from 'react'; 
import CssBaseline from '@mui/material/CssBaseline'
import {BrowserRouter} from 'react-router-dom';
import Router from './Routing';
import Panel from './Components/Panel';
// import MyFooter from './Components/MyFooter'; 

function App() {
  
  return (
 
    <div className="App">
      <CssBaseline>
        <BrowserRouter>
          <Panel/>
          <Router/>
        </BrowserRouter>
        {/* <MyFooter/> */}
      </CssBaseline>
    </div>
  
  );
}

export default App;
