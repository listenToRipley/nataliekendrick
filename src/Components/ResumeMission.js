import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({ 
  mission: {
    marginTop: '-4em',
    marginBottom: '2em'
  }
}));

const ResumeMission = () => {

  const classes = useStyles();

  return (
    <p className={classes.mission}>
    After working in a variety of fields I have developed a comprehensive knowledge base for effective business practices, including:  application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.
    </p>
  )

};

export default ResumeMission;