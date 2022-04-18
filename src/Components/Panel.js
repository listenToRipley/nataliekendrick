import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

const WebPanel = () =>  {
  console.log('panel here?')

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  // styles
  const panel = {
    position:'absolute'
  }

  const tabs = {
    flexWrap: 'wrap',
    color: 'white',
    fontSize: '5em',

  }

  const tab = {
    fontSize: '5em',
  }

  return (
    <div className="panel">
    <AppBar 
    className="bar"
    position="static"
    color='transparent'
    sx={{
      panel
    }}
    >
    <Box sx={{ 
      width: '100%',
      }}>
      <Tabs 
      maxWidth="xl"
      className="tab"
      value={value} 
      onChange={handleChange} 
      aria-label="menu items" 
      indicatorColor='transparent'
      allowScrollButtonsMobile={true}
      variant='fullWidth'
      sx={{
        tabs
      }}  
      centered='true'
      >
      <Toolbar disableGutters>
        <Tab
          label="Home"
          className="link"
          to='/' 
          aria-label='home'
          sx={{
            tab
          }}
        />
        <Tab 
          label="About"
          component={Link}
          className="link"
          to='/about'  
          aria-label='about'
          sx={{
            tab
          }}
          
        />
        <Tab
          label="Resume"  
          component={Link}
          className="link"
          to='/resume' 
          aria-label='resume'
          sx={{
            tab
          }}
        />
        <Tab
          label="Projects" 
          className="link"
          component={Link}
          to='/projects' 
          aria-label='projects'
          sx={{
            tab
          }}
        />
        </Toolbar>
      </Tabs>
      </Box>
    </AppBar>
  </div>
  );
}

export default WebPanel