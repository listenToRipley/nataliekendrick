import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));



const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
        container
        direction="row"
        jusitify="center"
        alignItems="center"
        spacing={2}>
          <Grid
          item xs> 
          Natalie Kendrick
          </Grid>
        </Grid>
    </Paper>
    </div>
  )
}

export default Resume