import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
    <Grid container spacing={2} className='aboutHeader' alignContent='space-evenly' direction='row'>
    <Grid item xs={12} s={12} md={10} lg={4} spacing={0} alignItem='center'>
    <img
      className="profilePic"
      alter='Natalie Kendrick' 
      src={profile}
      >
     </img> 
    </Grid>
     <Grid item xs={12} s={12} md={10} lg={8} spacing={6}>
       <Grid item spacing={2}  className="aboutName" >Natalie Kendrick</Grid>
       <Grid item spacing={4} className="aboutQuote">   
    <em>
    “The most dangerous phrase in the language is we've always done”
    </em> ~ Grace Hopper</Grid>
     </Grid> 


    <Grid item className="aboutBody" spacing={2}>
    <Typography paragraph>
    I am a motivated professional with extensive experiences ranging from web development to fine arts to customer service. I bring a unique protective to the table. I believe in continuous learner and big picture thinking. I am flexible, organized and determined.
    </Typography>
    <Typography> I am also goal-orientated and creatively drive. I am passionate about making sure everyone get what they need from the project. I keep an eye on my team to make sure they have what they need to succeed as well. I believe that my team success is my own. All of this makes me a proactive, self-starter who thrives in when it comes to problem solving.</Typography>
    <Typography paragraph>
    In my spare time I love to read, hike with my dog, do yoga, and play board games. I love, love, love food and cooking. I am also a massive movie buff and my international television. 
    </Typography>
    <Typography>
      I look forward to hearing from you and have a fantastic adventure today. 
    </Typography>
    </Grid>
    </Grid>
  </Paper>

  )
}

export default About 