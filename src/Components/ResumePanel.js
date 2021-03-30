import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import './Components.css';
//would like to add a second menu under the main on so the different sections of the resume can be linked to

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

const ResumePanel = () => {
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
          label="Top"
          className={classes.link}
          component={Link}
          to='' 
          aria-label='top'
        />
        <Tab 
          label="Experiences"
          component={Link}
          className={classes.link}
          to=''  
          aria-label='experiences'
        />
        <Tab 
          label="Education"  
          component={Link}
          className={classes.link}
          to='' 
          aria-label='education'
        />
        <Tab 
          label="Contact" 
          className={classes.link}
          component={Link}
          to='' 
          aria-label='contact'
        />
        <Tab 
          label="References" 
          className={classes.link}
          component={Link}
          to='' 
          aria-label='references'
        />
      </Tabs>
    </AppBar>
  </div>
  );
}

export default ResumePanel