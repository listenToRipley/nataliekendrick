import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import PantryPalsPlanning from './Components/PantryPalsPlanning'


const Router = () => {
  return (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About} />
    <Route path='/resume' component={Resume} />
    <Route path='/projects' component={Projects} /> 
    <Route path='/pantryPalsPlanning' component={PantryPalsPlanning}/>
  </Switch>
  )
}

export default Router