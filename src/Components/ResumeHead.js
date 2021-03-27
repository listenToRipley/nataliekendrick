import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({
  resume: {
    flexGrow: 1,
    flexWrap: "wrap",
    direction: "row",
    minWidth: "200px",
    fontFamily: "Droid Sans",
    marginTop: "-3em",
    marginBottom: "5em"
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: "5em", 
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5em",
    maxWidth: 900
  },
  name: {
    fontSize: 32,
    fontFamily: 'Droid Sans'
  },
  title: {
    fontSize: 20,
    marginTop: '.5em',
  },
  separates: {
    display: "flex",
    flexWrap: "wrap",
    color: "white",
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: "no-repeat",
    justifyContent: "space-around",
    fontWeight: 600,
    letterSpacing: "1px"
  },
  contactText: {
    flexWrap: 'wrap',
    fontSize: '98%',
  },
  email: {
    color: '#4fb5dd',
  },

})
);

const ResumeHead = () => {

  const classes = useStyles();

  return(
    <div className={classes.paper}>
    <Typography className={classes.name}>Natalie Kendrick</Typography>
    <p className={classes.title}>Full Stack Developer</p>
    <Paper className={classes.separates}>

      <p className={classes.email} href='mailto: natalie.m.kendrick@gmail.com'>natalie.m.kendrick@austin.utexas.edu</p>
      <p disableTypography='true' className={classes.contactText}>520-404-3721</p>

    </Paper>
  </div>
  )
} 

export default ResumeHead