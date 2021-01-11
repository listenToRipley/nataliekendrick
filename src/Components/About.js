import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
     <Typography className="aboutName"   align='center' variant="h3"   component="h4" gutterBottom>
     <img
      className="profilePic"
      alter='Natalie Kendrick' 
      src={profile}
      >
     </img> 
       Natalie Kendrick
     </Typography> 
    <Typography className="aboutTitle" variant="caption"  align='center' display="block">“The most dangerous phrase in the language is we've always done” ~ Grace Hopper</Typography>
    <div className="aboutBody">
    <Typography paragraph>
       Native desert rat of Tucson Arizona, current transplant to  Austin Texas. 
     </Typography>
     <Typography paragraph> Natalie is passionate about coding,  animals, cooking and movies.</Typography>
    </div>
  </Paper>
  )
}

export default About 