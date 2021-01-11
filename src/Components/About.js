import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
         <img
      className="profilePic"
      alter='Natalie Kendrick' 
      src={profile}
      >
     </img> 
     <p className="aboutName" gutterBottom>
       Natalie Kendrick
     </p> 
    <p className="aboutQuote">   “The most dangerous phrase in the language is we've always done” ~ Grace Hopper</p>
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