import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  }, 
  name: {
    justifyItem: 'space-evenly'
  }
}));

const Panel = () =>  {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //will need to include routing on click, use links. 
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.name}>Natalie Kendrick</Typography>
        <Tabs value={value} onChange={handleChange} aria-label="menu items" centered={true}>
          <Tab label="Home" 
                component={Link}
                to='/home' 
          />
          <Tab label="About"
                component={Link}
                to='/about'  
          />
          <Tab label="Resume"  
            component={Link}
            to='/resume' 
          />
          <Tab label="Projects" 
              component={Link}
              to='/projects' 
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Panel