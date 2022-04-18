import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
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
  skillTitle: {
    paddingTop: '1em'
  },
  skillList: {
    display: 'incline',
    marginLeft: '2em',
    marginRight: '1em',
    marginBottom: '1em',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
        }
  },
  chip: {
    margin: '.5em'
  }, 
}));

const ResumeSkills = () => {

  const classes = useStyles();

  const skills = [
    "Communication",
    "Strategic Planning",
    "Project Management",
    "Project Planning",
    "Time Management",
    "Customer Service",
    "Contact Assessment",
    "Workflow Creation",
    "System Migrations",
    ]

    const technologies = [
      "JavaScript",
      "Docker",
      "Rancher",
      "Node.js",
      "Drupal",
      "React",
      "Redux",
      "MySQL",
      "Express.js",
      "HTML5",
      "CSS",
      "Heroku",
      "RESTful API",
      "Git/GitHub",
      "Webpack",
      "Debugging",
      "Excel",
      "PowerPoint",
      "MS Word",
      "American Sign Language",
      "Netlify", 
      "PHP",
      "Python",
      "Linux",
      "XML", 
      "JSON"
    ]

    //better option than list? 
  return(
    <List>
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Skills</ListItem>
      </Paper>
    
      <div className={classes.skillList}>
      
      <Typography className={classes.skillTitle}>Hard Skills</Typography>
      {technologies.sort().map((tech) => <Chip label={tech} variant="outline" className={classes.chip}/>)}

      <Typography className={classes.skillTitle}>Soft Skills</Typography>
      {skills.sort().map((skill) => <Chip label={skill} variant="outline" className={classes.chip}/>)}

      </div>
    </List>
  )
} 

export default ResumeSkills