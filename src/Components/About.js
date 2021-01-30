import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
    <Grid root spacing={3} className='aboutHeader' alignContent='space-evenly' noWrap='true'>
    <Grid container alignContent='center'>
    <Grid item xs={12} s={6} md={5} lg={3} alignItems='center'>
    <img
      className="profilePic"
      alt='Natalie Kendrick' 
      src={profile}
     />
    </Grid>
      <Grid div item xs={12} s={6} md={6} lg={9} spacing={6} alignContent='space-evenly' >

     <p 
    className='aboutName'
    >Natalie Kendrick</p>
    <div className='pronouns'>
      <em>pronouns: she/her/hers</em>
    </div>
      
     <div className='aboutQuote'> 
      <em>
      “The most dangerous phrase in the language is we've always done”
    </em> ~ Grace Hopper
    </div>
      </Grid>

    <Typography paragraph>
    Creatively driven, flexible, organized, goal oriented and bringing a unique perspective to the table. Natalie is a motivated professional with extensive experience ranging from web development and fine arts to customer service.
    </Typography>
    <Typography> When it comes to problem solving she is proactive, a self-starter, and enjoys problem solving. A team oriented playing, believing that her successes benefit the team and vice versa.
</Typography>
    <Typography paragraph>
    In her spare time she loves to read, hike with her dog, do yoga, and play board games. She is passionate about food, cooking, and sharing those meals with great conversation. She is also a massive movie buff and enjoys international television.
    </Typography>
    <Typography>
    She looks forward to hearing from you and hopes you have a fantastic adventure today 
    </Typography>
    </Grid>
    </Grid>
  </Paper>

  )
}

export default About 