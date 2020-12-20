import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: theme.palette.background.paper,
    justifyContent: 'space-evenly'
  },
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
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" 
                component={Link}
                to='/' 
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