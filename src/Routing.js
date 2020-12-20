import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';


const Router = () => {
  return (
  <Switch>
    <Route path='/' component={Home}/>
    <Route path='/About' component={About} />
    <Route path='/Resume' component={Resume} />
    <Route path='/Projects' component={Projects} /> 
    {/* <Route path='/Projects/All' />
    <Route path='/Projects/FrontEnd' />
    <Route path='/Projects/BackEnd' /> */}
  </Switch>
  )
}

export default Router