import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';

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
}));

const ResumeSkills = () => {

  const classes = useStyles();

  const skills = [
    "JavaScript",
    "Node.js",
    "React",
    "Redux",
    "MySQL",
    "Express.js",
    "HTML5",
    "CSS",
    "Debugging",
    "Heroku",
    "RESTful API",
    "Git/GitHub",
    "Strategic Planning",
    "Project Management",
    "Time Management",
    "Customer Service",
    "Contact Assessment",
    "Workflow Creation",
    ]

  return(
    <List className={classes.skillLIst}>
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Skills</ListItem>
      </Paper>
      {skills.map((skill) => {
        return <ListItem>{skill}</ListItem>
      })}
    </List>
  )
} 

export default ResumeSkills