import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontSize: 20,
    marginTop: '-1em'
  },
  separates: {
    display: 'block',
    color: 'white',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat'
  },
  email: {
    color: '#4fb5dd',
  },
  additionalContact: {
    padding: '10px',
    display: 'flex',
    flex: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  contactGrid: {
    padding: '2%'
  },
  contactButton: {
    justify: 'center',
    backgroundColor: 'transparent'
  },

}));



const ResumeContact = () => {
  const classes = useStyles();

  const colors = []; 

  const contactDetails = [
    {
      type: 'linkedIn',
      icon: <FaLinkedin/>,
      link: 'https://www.linkedin.com/in/nataliemichellekendrick/',
      title: '@nataliemichellekendrick'
    }
  ]; 

  // {
  //   type: '',
  //   icon: '',
  //   link: '',
  //   title: ''
  // }
  

  return(
    <div>
    <Paper className={classes.separates}>
      <ListItem className={classes.sectionTitle}>Contact</ListItem>
    </Paper>
      <div className={classes.additionalContact}>
      <div className={classes.contactGrid} >
         <Button className={classes.contactButton} 
            variant="contained"
            aria-label="linked in"
            startIcon={<FaLinkedin color={'blue'}/>}
            onClick={() => window.open('https://www.linkedin.com/in/nataliemichellekendrick/')}
            >
              @nataliemichellekendrick
           </Button>
        </div>

        <div className={classes.contactGrid}>    
          <Button className={classes.contactButton}          variant="contained"         aria-label="twitter contact"         startIcon={<FaTwitterSquare color={'skyBlue'} />}         onClick={() => window.open('https://twitter.com/NKendrick12')}         >           @NKendrick12         </Button>      </div>

        <div
        className={classes.contactGrid}>
        <Button className={classes.contactButton} 
         variant="contained"
         aria-label="github contact"
         startIcon={<FaGithubAlt color={'maroon'} />}
         onClick={() => window.open('https://github.com/listenToRipley')}
         >
           @listenToRipley 
         </Button>
        </div>

        <div
        className={classes.contactGrid}>
        <Button className={classes.contactButton} 
        variant="contained"
        aria-label="instagram contact"
        startIcon={<FaInstagram color={'red'}/>}
        onClick={() => window.open('https://www.instagram.com/garbosmile/?hl=en')}
        >
          @garbosmile
        </Button>
        </div>

      </div>
  </div>
  )
}

export default ResumeContact