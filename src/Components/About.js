import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
    <Grid root spacing={2} className='aboutHeader' alignContent='space-evenly' noWrap='true'>
    <Grid container>
    <Grid item xs={12} s={6} md={6} lg={3} spacing={2} alignItem='center'>
    <img
      className="profilePic"
      alt='Natalie Kendrick' 
      src={profile}
     />
    </Grid>
      <Grid div item xs={12} s={6} md={6} lg={9} spacing={6} >

     <p 
    className='aboutName'
    >Natalie Kendrick</p>
      
     <div className='aboutQuote'> 
      <em>
      “The most dangerous phrase in the language is we've always done”
    </em> ~ Grace Hopper
    </div>
      </Grid>

    <Typography paragraph>
    I am a motivated professional with extensive experience ranging from web development and fine arts to customer service. I bring a unique perspective to the table. I believe in continuous learning and big picture thinking. I am flexible, organized, goal-oriented, and creatively driven. 
    </Typography>
    <Typography> I am passionate about making sure everyone gets what they need from the project. Being team oriented means to me that I keep an eye on my team to make sure they have what they need to succeed to the best of their ability. I believe that my success benefits the team above all else. When it comes to problem solving I am proactive, a self-starter, and enjoy problem solving.
</Typography>
    <Typography paragraph>
    In my spare time I love to read, hike with my dog, do yoga, and play board games. I love, love, love food and cooking. I am also a massive movie buff and enjoy international television. I look forward to hearing from you and I hope you have a fantastic adventure today. 
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