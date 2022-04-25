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
        After working in a variety of fields I have developed a comprehensive knowledge of business practices. This means I understand the importance of leveraging these skills to provide sustainable and meaningful practices that create innovative, efficient and effective products to support all parties.   
      </Typography>
    </div>
  )

};

export default ResumeMission;