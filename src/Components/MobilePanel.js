import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import './Components.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const MobilePanel = () =>  {
  // const classes = useStyles();
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
    <Drawer>
        <Button onClick={toggleDrawer(true)}>Bottom</Button>
        <SwipeableDrawer
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list}
        </SwipeableDrawer>
  </Drawer>
  );
}

export default MobilePanel