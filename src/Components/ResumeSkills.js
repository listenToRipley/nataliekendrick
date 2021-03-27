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
import Chip from '@material-ui/core/Chip';

import backdrop from './projectImgs/backdrop.jpeg';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

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
  skillList: {
    display: 'incline',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
        }
  },
  chip: {

  }, 
}));

const ResumeSkills = () => {

  const classes = useStyles();

  const skills = [
    "Debugging",
    "Strategic Planning",
    "Project Management",
    "Time Management",
    "Customer Service",
    "Contact Assessment",
    "Workflow Creation",
    ]

    const technologies = [
      "JavaScript",
      "Node.js",
      "React",
      "Redux",
      "MySQL",
      "Express.js",
      "HTML5",
      "CSS",
      "Heroku",
      "RESTful API",
      "Git/GitHub",
      "Excel",
      "American Sign Language"
    ]

    //better option than list? 
  return(
    <List>
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Skills</ListItem>
      </Paper>
    
      <div className={classes.skillList}>
      
      <Typography>Hard Skills</Typography>
      {technologies.map((tech) => <Chip label={tech} variant="outline" className={classes.chip}/>)}

      <Typography>Soft Skills</Typography>
      {skills.map((skill) => <Chip label={skill} variant="outline" className={classes.chip}/>)}
      
      </div>
    </List>
  )
} 

export default ResumeSkills