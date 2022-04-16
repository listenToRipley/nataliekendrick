import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter} from 'react-router-dom';
import Router from './Routing';
import Panel from './Components/Panel';
import MyFooter from './Component/Footer'; 
import { Component } from 'react';

function App() {
  return (
 
    <CssBaseline>
      <BrowserRouter>
        <Panel/>
        <Router/>
      </BrowserRouter>
      <MyFooter/>
    </CssBaseline>
  
  );
}

export default App;
