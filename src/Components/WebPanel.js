import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

const WebPanel = () =>  {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  return (
    <div className='panel'>
    <AppBar color="transparent" position="static">
      <Tabs className='tabs' indicatorColor='primary' value={value} onChange={handleChange} aria-label="menu items" centered={true} >
        <Tab label="Home" 
              component={Link}
              to='/' 
              aria-label='home'
        />
        <Tab label="About"
              component={Link}
              to='/about'  
              aria-label='about'
        />
        <Tab label="Resume"  
          component={Link}
          to='/resume' 
          aria-label='resume'
        />
        <Tab label="Projects" 
            component={Link}
            to='/projects' 
            aria-label='projects'
        />
      </Tabs>
    </AppBar>
  </div>
  );
}

export default WebPanel