import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import backdrop from './projectImgs/backdrop.jpeg';
import Link from '@material-ui/core/Link';

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
  ref: {
    margin: '1em'
  }
}));



const ResumeRef = () => {
  const classes = useStyles();

//would like to add testimonials 

  return(
    <div>
    <Paper className={classes.separates}>
      <ListItem className={classes.sectionTitle}>References</ListItem>
    </Paper>
    <Typography className={classes.ref}>References available upon <Link href='https://docs.google.com/spreadsheets/d/1xOWVDYFLIk4DrofA3K6GosPREidyfyjn-aBjJGK02M4/edit?usp=sharing'>request</Link></Typography>
    </div>
  )
} 

export default ResumeRef