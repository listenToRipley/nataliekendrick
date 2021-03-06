import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import aca from './projectImgs/acaBadge.png';
import pima from './projectImgs/pima.png';
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({
  eduBody: {
    marginBottom: '3em'
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: '-1em'
  },
  separates: {
    display: 'block',
    color: 'white',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat',
    marginBottom: '1em',
  },
  eduIcons: {
    marginRight: '4em',
    overflow: 'auto',
  },
  eduContact: {
    underline: 'hover'
  },
  eduLocation: {
   display: 'block',
   textAlign: 'end',
   marginTop: '-4em',
  },
  degree: {
    display: 'block',
    marginLeft:'1em',
    marginRight: '1em',
    marginBottom: '2em',
    fontSize: '1em',
    fontStyle: 'italic',
    fontWeight:' fontWeightLight',
  }

}));

const ResumeEdu = () => {

  const classes = useStyles();

  return(
    <div className={classes.eduBody}>
      <List>
        <Paper className={classes.separates}>
          <ListItem className={classes.sectionTitle}>Education</ListItem>
        </Paper>
          <ListItem className={classes.eduIcons}>
          <ListItemAvatar>
            <Avatar 
            className={classes.avatar}
            alter='AustinCodingAcademy Badge' 
            src={aca}
            />
          </ListItemAvatar>
          <Link className={classes.eduContact}
           href='https://austincodingacademy.com/'>AUSTIN CODING ACADEMY</Link>
          </ListItem>
          <Typography className={classes.degree}>Full Stack Developer  (Dec 2020)</Typography>
          <ListItem className={classes.eduLocation}>Austin, TX</ListItem>
          <ListItem
          className={classes.eduIcons}>
          <ListItemAvatar>
            <Avatar 
            className={classes.avatar}
            alter='Pima Community College Logo' 
            src={pima}
            />
          </ListItemAvatar>
          <Link
          className={classes.eduContact}
          href='https://www.pima.edu/'> PIMA COMMUNITY COLLEGE </Link>
          </ListItem>
          <Typography className={classes.degree}>General Studies Associate's Degree Liberal Arts (Dec 2010)</Typography>
          <ListItem className={classes.eduLocation}>Tucson, AZ</ListItem>
            </List>
    </div>
  )
} 

export default ResumeEdu