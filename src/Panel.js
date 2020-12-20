import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
          <Tab label="Home"  />
          <Tab label="About" />
          <Tab label="Resume"  />
          <Tab label="Projects" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Panel