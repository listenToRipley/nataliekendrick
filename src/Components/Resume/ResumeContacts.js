import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import backdrop from '../Imgs/backdrop.jpeg';

// const useStyles = makeStyles((theme) => ({
  const contactBody = {
    marginBottom: '2.5em'
  }

  const sectionTitle = {
    fontSize: 20,
  }

  const separates = {
    display: 'block',
    color: 'white',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat',
    marginBottom: '1em'
  }

  const email = {
    color: '#4fb5dd',
  }

  const additionalContact = {
    display: 'flex',
    flex: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', //might want to try something else here. 
    marginBottom: '2em'
  }

  const contactGrid = {
    padding: '5px'
  }

  const contactButton = {
    justify: 'center',
    backgroundColor: 'transparent'
  }

// }));


const ResumeContact = () => {
  // const classes = useStyles();
  //may want to update color of links
  // const colors = []; 

  const contactDetails = [
    {
      type: 'linkedIn',
      icon: <FaLinkedin/>,
      link: 'https://www.linkedin.com/in/nataliemichellekendrick/',
      title: '@nataliemichellekendrick'
    },
    {
      type: 'twitter',
      icon: <FaTwitterSquare/>,
      link: 'https://twitter.com/NKendrick12',
      title: '@NKendrick12'
    },
    {
      type: 'github',
      icon: <FaGithubAlt/>,
      link: 'https://github.com/listenToRipley',
      title: '@listenToRipley'
    },
    {
      type: 'instagram',
      icon: <FaInstagram/>,
      link: 'https://www.instagram.com/garbosmile/?hl=en',
      title: '@garbosmile'
    }
  ]; 

  // {
  //   type: '',
  //   icon: '',
  //   link: '',
  //   title: ''
  // }

  const media = contactDetails.map((each) => {
    return (
      <div className="contactGrid" sx={{ additionalContact }}>
      <Button className="contactButton" 
        sx={{ contactButton }}
        variant="contained"
        aria-label={each.type}
        startIcon={each.icon}
        onClick={() => window.open(`${each.link}`)}
        >
          {each.title}
        </Button>
      </div>
    )
  })
  

  return(
    <div className="body" sx={{ contactBody }}>
    <Paper className="separates" sx={{ separates }}>
      <ListItem className="sectionTitle"  sx={{ sectionTitle }}>Contact</ListItem>
    </Paper>
      <div className="additionalContact">

      {media}

      <div className="contactGrid" sx={{ contactGrid }}>
      <Button className="contactButton"
        sx={{ email }} 
        variant="contained"
        aria-label='email'
        startIcon={<FaGoogle/>}
        href='mailto: natalie.m.kendrick@gmail.com'
        >
        natalie.m.kendrick@austin.utexas.edu
        </Button>
      </div>

      <div className="contactGrid" sx={{ contactGrid }} >
      <Button className="contactButton" 
        variant="contained"
        aria-label='phone'
        startIcon={<FaPhoneAlt/>}
        >
          520-404-3721
        </Button>
      </div>

      </div>
  </div>
  )
}

export default ResumeContact