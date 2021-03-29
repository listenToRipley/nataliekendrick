import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({ 
  separates: {
    display: 'block',
    color: 'transparent',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat'
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: '-1em'
  },
  mission: {
    marginBottom: '3em',
    marginLeft: '1em',
    marginRight: '2em',
    padding: '1em',
    justifyText: 'center'
  }
}));

const ResumeMission = () => {

  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Mission</ListItem>
      </Paper>
      <Typography className={classes.mission} align="center">
        After working in a variety of fields I have developed a comprehensive knowledge base for effective business practices, including:  application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.
      </Typography>
    </div>
  )

};

export default ResumeMission;