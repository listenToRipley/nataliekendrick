import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

const useStyles = makeStyles({ 
  panel:{
    color: 'transparent',
    position:'static',
    fontSize: '50px',
    height: '20%',
    marginBottom: '3%'
  },
  bar:{
    // centered: true, 

    justifyContent: 'space-evenly',
  },
  tabs:{ 
    width: '100%',
    color: 'white',

  },  
  link: {
    fontSize: '50px', 

  }
});

const WebPanel = () =>  {

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  return (
    <div className={classes.panel}>
    <AppBar 
    className={classes.bar}
    color='transparent' >
      <Tabs 
      className={classes.tabs}
      value={value} 
      onChange={handleChange} 
      aria-label="menu items" 
      centered={true}
      indicatorColor='primary' >
        <Tab 
          label="Home"
          className={classes.link}
          component={Link}
          to='/' 
          aria-label='home'
        />
        <Tab 
          label="About"
          component={Link}
          className={classes.link}
          to='/about'  
          aria-label='about'
        />
        <Tab 
          label="Resume"  
          component={Link}
          className={classes.link}
          to='/resume' 
          aria-label='resume'
        />
        <Tab 
          label="Projects" 
          className={classes.link}
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