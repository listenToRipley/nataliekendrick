import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import {Link} from 'react-router-dom';
// import './Components.css';

const useStyles = makeStyles({
  appbar:{
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    height: '25%',
    width: '100vw'
  },
  icon: {
    color: 'rgba(245, 245, 245, 0.315)',
    display: 'inline-block',
    width: '100vw',
    height: '25vh',
    padding: '10%'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  test: {
    fontSize: 25,
    color: 'white'
  }
});

const MobilePanel = () =>  {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  const list = () => (
    <Drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      <Tabs className='tabs' indicatorColor='primary' value={value} onChange={handleChange} aria-label="menu items" centered={true} >
        <Tab label="Home" 
              component={Link}
              to='/' 
              aria-label='home'
        />
        <Divider/>
        <Tab label="About"
              component={Link}
              to='/about'  
              aria-label='about'
        />
        <Divider/>
        <Tab label="Resume"  
          component={Link}
          to='/resume' 
          aria-label='resume'
        />
        <Divider/>
        <Tab label="Projects" 
            component={Link}
            to='/projects' 
            aria-label='projects'
        />
      </Tabs>
      </List>
    </Drawer>
  );

  return (
    <AppBar className={classes.appbar} 
    position="fixed" 
    color="transparent"
    fullWidth='true'>

        <Button
        edge="start" 
        aria-label="open drawer" 
        onClick={toggleDrawer(true)}>
        {setOpen ?  <FaAngleUp className={classes.icon} onClick={toggleDrawer(true)} /> : <FaAngleDown className={classes.icon} onClick={toggleDrawer(false)}/>}
          <SwipeableDrawer
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
          {setOpen ? {list} : <Fragment/>}
          </SwipeableDrawer>
        </Button>

    </AppBar>
  );
}

export default MobilePanel