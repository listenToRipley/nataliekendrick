import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

// const useStyles = makeStyles({ 
//   panel:{
//     display: 'flex',
//     flexWrap: 'wrap',
//     color: 'transparent',
//     position:'static',
//     height: '20%',
//     marginBottom: '12em'
//   },
//   bar:{
//     padding: '1em',
//     position: 'absolute'
//   },
//   tabs:{ 
//     width: '100%',
//     color: 'white',
//     justifyContent: 'space-evenly',
//   },  
//   link: {
//     fontSize: '1.5em',
//     padding: '.2em'
//   }
// });

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
    // color='transparent' 
    >
      <Container 
      maxWidth="xl"
      className="tab"
      variant="fullWidth"
      value={value} 
      onChange={handleChange} 
      aria-label="menu items" 
      // indicatorColor='transparent' 
      >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          component={Link}
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          label="Home"
          className="link"

          to='/' 
          aria-label='home'
        />
        <Tab 
          label="About"
          component={Link}
          className="link"
          to='/about'  
          aria-label='about'
        />
        <Tab 
          label="Resume"  
          component={Link}
          className="link"
          to='/resume' 
          aria-label='resume'
        />
        <Tab 
          label="Projects" 
          className="link"
          component={Link}
          to='/projects' 
          aria-label='projects'
        />
        </Toolbar>
      </Container>
    </AppBar>
  </div>
  );
}

export default WebPanel