import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';


const Router = () => {
  return (
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About} />
    <Route path='/resume' component={Resume} />
    <Route path='/projects' component={Projects} /> 
    {/* <Route path='/Projects/All' />
    <Route path='/Projects/FrontEnd' />
    <Route path='/Projects/BackEnd' /> */}
  </Switch>
  )
}

export default Router