import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import ResumeHead from './ResumeHead';
import ResumeEdu from './ResumeEdu';
import ResumeSkills from './ResumeSkills';
import ResumeMission from './ResumeMission';
import ResumeExp from './ResumeExp'; 
import ResumeContact from './ResumeContacts';
import ResumeRef from './ResumeRef'; 
import ResumePanel from './ResumePanel';

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

}));



const Resume = () => {
  const classes = useStyles();

  return (

<div>
    <div className={classes.resume}>
      <Paper className={classes.paper}>

      <ResumeHead/>
      <ResumeMission/>
      <ResumeExp/>
      <ResumeEdu/>
      <ResumeSkills/>
      <ResumeContact/>
      <ResumeRef/>

    </Paper>
    </div>
{/* 
    <footer>
      <ResumePanel/>
    </footer> */}
  </div>
  )
}

export default Resume