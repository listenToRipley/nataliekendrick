import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
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
    "Time Management",
    "Customer Service",
    "Contact Assessment",
    "Workflow Creation",
    "Story Writing",
    "Public Speaking",
    "Presenting",
    "Business Acumen",
    "Managing User Expectations",
    "Mapping Processes"
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
      "Docker",
      "Python",
      "SOLR",
      "Django",
      "PHP",
      "Drupal",
      "Drush",
      "JSON", 
      "XML",
      "Command Line",
      "Linux",
      "Drone",
      "YML/YAML",
      "Heroku",
      "RESTful API",
      "Fedora",
      "Metadata",
      "Git/GitHub",
      "SSH",
      "Webpack",
      "Debugging",
      "Excel",
      "PowerPoint",
      "MS Word",
      "American Sign Language",
      "Netlify",
      "Splunk",
      "Rancher",
      "Jira",
      "Slack", 
      "Trello",
      "Composer",
      "Postman",
      "Bootstrap"
    ]

    //better option than list? 
  return(
    <List>
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Skills</ListItem>
        <Typography><em>"A jack of all trades is a master of none, but oftentimes better than a master of one."</em> ~ Robert Greene</Typography>
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