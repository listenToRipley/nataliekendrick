import React, {useState} from 'react';
import {}
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
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

const Panel = () =>  {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [bottom, setBottom] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setBottom({ ...bottom, [anchor]: open });
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  const panelTop = () => {
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
  }

  const mobile = (anchor) => {

  }

  return (
   <div>
     {if(window.)}
   </div>
  );
}

export default Panel