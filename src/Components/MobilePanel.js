import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import {Link} from 'react-router-dom';
// import './Components.css';

const useStyles = makeStyles({
  appbar:{
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    width: '100%'
  },
  icon: {
    fontSize: 'large',
    color: 'white',
    width: '100%'
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
  const [bottom, setBottom] = useState(false);
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setBottom({ ...bottom, [anchor]: open = true });
  };

  const list = (anchor) => (
    <Drawer
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
    <AppBar className={classes.appbar} position="fixed" color="transparent">
      <Toolbar>
        <Button className={classes.icon} edge="start" color="inherit" aria-label="open drawer" 
        onClick={toggleDrawer(true)}>
        <ExpandMoreRoundedIcon/>
          <SwipeableDrawer
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list}
          </SwipeableDrawer>
        </Button>
      </Toolbar>
    </AppBar>
  // <div className={classes.test}>##################</div>
  );
}

export default MobilePanel