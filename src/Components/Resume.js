import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  line: {
    display: 'block',
    color: 'grey',
    backgroundColor: 'grey'
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
          item xs={3}> 
            <Typography>Natalie Kendrick</Typography>
            <p>Full Stack Developer</p>
          </Grid>

          <Grid
          item xs={8}> 
            <Typography>About</Typography>
            <Paper className={classes.line}>.</Paper>
            <p>Hard-working professional with over 10 years of work experience in a variety of fields and a working knowledge of application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.</p>
          </Grid>

          <Grid
          item xs={3}> 
            <FaGoogle/> 
          </Grid>

        </Grid>
    </Paper>
    </div>
  )
}

export default Resume