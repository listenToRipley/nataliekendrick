import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

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
            <List>
              <ListItem>
               <ListItemAvatar>
                <FaGoogle/> 
               </ListItemAvatar>
               <ListItemText>
                  natalie.m.kendrick@gmail.com
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar>
                <FaPhoneAlt/> 
               </ListItemAvatar>
               <ListItemText>
                 (520)-404-3721
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar>
                <FaMapMarkerAlt/> 
               </ListItemAvatar>
               <ListItemText>
               Austin, TX
               </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid
          item xs={8}>
            <Typography>Experience</Typography>
            <Paper className={classes.line}>.</Paper>
            Procurement Card Administrator
          </Grid>

        </Grid>
    </Paper>
    </div>
  )
}

export default Resume