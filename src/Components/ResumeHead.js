import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    marginBottom: '-2em'
  }

})
);

const ResumeHead = () => {

  const classes = useStyles();

  return(
    <div className={classes.paper}>
    <Typography className={classes.name} align="center">Natalie Kendrick</Typography>
    <p className={classes.title} align="center">Full Stack Developer</p>
  </div>
  )
} 

export default ResumeHead