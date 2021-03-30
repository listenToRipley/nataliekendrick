import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import  { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp'
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import { FaSchool } from '@react-icons/all-files/fa/FaSchool'; 
import { FaSwatchbook } from '@react-icons/all-files/fa/FaSwatchbook';
import { FaAddressBook } from '@react-icons/all-files/fa/FaAddressBook';
import { FaAsterisk } from '@react-icons/all-files/fa/FaAsterisk';
//would like to add a second menu under the main on so the different sections of the resume can be linked to

const useStyles = makeStyles({ 
  root: {
    width: '100%',
    position: '-webkit-fixed', /* Safari */
    position:'fixed',
    bottom: 0,
    left: 0
  },
  icons: {
    fontSize: '20px',

  }
});

const ResumePanel = () => {
const classes = useStyles();
const [value, setValue] = React.useState('recents');

const handleChange = (event, newValue) => {
  setValue(newValue);
    //will need to include routing on click, use links. 
  };

  return (
    <div className={classes.bottom}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.icons} label="Top" value="top" icon={<FaArrowUp/>} />
      <BottomNavigationAction className={classes.icons} label="Experience" value="experiences" icon={<FaBriefcase/>} />
      <BottomNavigationAction className={classes.icons} label="Education" value="education" icon={<FaSchool />} />
      <BottomNavigationAction className={classes.icons} label="Skills" value="skills" icon={<FaSwatchbook />} />
      <BottomNavigationAction className={classes.icons} label="Contacts" value="contacts" icon={<FaAddressBook />} />
      <BottomNavigationAction className={classes.icons} label="References" value="references" icon={<FaAsterisk />} />
    </BottomNavigation>
  </div>
  );
}

export default ResumePanel