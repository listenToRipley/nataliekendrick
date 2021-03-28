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

import ResumeHead from './ResumeHead';
import ResumeEdu from './ResumeEdu';
import ResumeSkills from './ResumeSkills';
import ResumeMission from './ResumeMission';
import ResumeExp from './ResumeExp'; 

const useStyles = makeStyles((theme) => ({
  resume: {
    flexGrow: 1,
    flexWrap: 'wrap',
    direction: 'row',
    minWidth: '200px',
    fontFamily: 'Droid Sans',
    marginTop: '-3em',
    marginBottom: '5em'
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5em',
    maxWidth: 900,
  },
  separates: {
    display: 'block',
    color: 'transparent',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat'
  },
  left: {
    minWidth: '220px',
    alignSelf: 'flex-start'
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: '-1em',
    marginTop: '-1em'
  },
  name: {
    fontSize: 32,
    fontFamily: 'Droid Sans'
  },
  title: {
    fontSize: 20,
    marginTop: '.5em',
  },
  contactInfo: {
    padding: theme.spacing(2),
    marginTop: '-1.5em',
    marginBottom: '-2.2em',
    textAlign: 'center',
    flexWrap: 'wrap',
  }, 
  contactIcons: {
    marginLeft: '-2.5em',
    marginRight: '-2em',
    overflow: 'auto',
    maxHeight: 300,
  },
  contactText: {
    flexWrap: 'wrap',
    fontSize: '98%',
  },
  email: {
    color: '#4fb5dd',
  },
  eduIcons: {
    marginLeft: '-1.5em',
    marginRight: '-3em',
    overflow: 'auto',
    maxHeight: 300,
  },
  eduContact: {
    underline: 'hover'
  },
  eduLocation: {
   display: 'block',
   textAlign: 'end',
   marginTop: '-1em',
  },
  degree: {
    display: 'block',
    marginLeft:'1em',
    marginRight: '1em',
    fontSize: '.75em',
    fontStyle: 'italic',
    fontWeight:' fontWeightLight',
  },
  right: {
    width: '100%'
  },
  company: {
    fontStyle: 'italic',
    color: 'secondary',
    underline: 'hover'
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



const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.resume}>
      <Paper className={classes.paper}>
      <ResumeHead/>
      <ResumeMission/>
      <ResumeExp/>
      <ResumeEdu/>
      <ResumeSkills/>
        <Grid
        container
        direction="row"
        jusitify="center"
        alignItems="center"
        spacing={'auto'}>

          <Grid
          item xs={8}
         > 
  
            <Typography>Additional contact information</Typography>
            <Paper className={classes.separates}>___________________</Paper>


            <Typography>References</Typography>
            <Paper className={classes.separates}>___________________</Paper>
            <p>References available upon request as well as complete work history</p>

          </Grid>

        </Grid>
    </Paper>
    </div>
  )
}

export default Resume