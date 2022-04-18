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

  // const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  return (
    <div className="panel">
    <AppBar 
    className="bar"
    position="static"
    color='transparent'
    sx={{
      position:'absolute',
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
        flexWrap: 'wrap',
        color: 'white',
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
            fontSize: '1.5em',
          }}
        />
        <Tab 
          label="About"
          component={Link}
          className="link"
          to='/about'  
          aria-label='about'
          sx={{
            fontSize: '1.5em',
          }}
          
        />
        <Tab
          label="Resume"  
          component={Link}
          className="link"
          to='/resume' 
          aria-label='resume'
          sx={{
            fontSize: '1.5em',
          }}
        />
        <Tab
          label="Projects" 
          className="link"
          component={Link}
          to='/projects' 
          aria-label='projects'
          sx={{
            fontSize: '1.5em',
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