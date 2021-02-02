import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import {Link} from 'react-router-dom';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles({
  appbar:{
    position:'static',
    top: 'auto',
    bottom: 0,
    alignContent: 'center',
    height: '100vh+100px',
    width: '100vw',
    marginBottom: 0,
  },
  icon: {
    color: 'rgba(245, 245, 245, 0.315)',
    display: 'absolute',
    width: '100vw',
    height: '12vh',
    padding: '10%',
    marginLeft: '15%'
  },
  list: {
    width: '250px',
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
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return setOpen(!open);
    }
  };

  return (
    
    <AppBar className={classes.appbar} 
    position="fixed" 
    fullWidth='true'>
            <p className={classes.test}>TESTING</p>
        <Button
        edge="start" 
        aria-label="open drawer" 
        onClick={toggleDrawer(true)}>
         <FaAngleUp className={classes.icon} />
          <SwipeableDrawer
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
          {setOpen ? 
            <Drawer
          role="presentation"
        >
          <Button onClick={toggleDrawer(false)}>
          <FaAngleDown className={classes.icon} />
          </Button>
          <List>
          <ListItem>
          <Link label="Home" 
            to='/' 
            aria-label='home'
            />
          </ListItem>
          <Divider/>
          <ListItem>
          <Link label="About"
            to='/about'  
            aria-label='about'
            />
            </ListItem>
            <Divider/>
            <ListItem>
            <Link label="Resume"  
              to='/resume' 
              aria-label='resume'
            />
            </ListItem>
            <Divider/>
            <ListItem>
            <Link label="Projects" 
              to='/projects' 
              aria-label='projects'
            />
            </ListItem>
          </List>
          </Drawer>
          : <Fragment/>}
          </SwipeableDrawer>
        </Button>
    </AppBar>
  );
}

export default MobilePanel