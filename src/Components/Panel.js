import React, {useState} from 'react';
import { makeStyles } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

const useStyles = makeStyles({ 
  panel:{
    display: 'flex',
    flexWrap: 'wrap',
    color: 'transparent',
    position:'static',
    height: '20%',
    marginBottom: '12em'
  },
  bar:{
    padding: '1em',
    position: 'absolute'
  },
  tabs:{ 
    width: '100%',
    color: 'white',
    justifyContent: 'space-evenly',
  },  
  link: {
    fontSize: '1.5em',
    padding: '.2em'
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
      variant="fullWidth"
      value={value} 
      onChange={handleChange} 
      aria-label="menu items" 
      indicatorColor='transparent' 
      >
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