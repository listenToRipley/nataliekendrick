import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profile from './projectImgs/profile.jpeg';
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
    <div className='aboutHeader'>
    <img
      className="profilePic"
      alter='Natalie Kendrick' 
      src={profile}
      >
     </img> 
     <p className="aboutName" gutterBottom>
       Natalie Kendrick
     </p> 
    </div>
    <p className="aboutQuote">   “The most dangerous phrase in the language is we've always done” ~ Grace Hopper</p>
    <div className="aboutBody">
    <Typography paragraph>
    A motivated professional with extensive experiences ranging from web development to customer service. I believe in continuous learner, big picture thinking and keeping in mind business needs. I am flexible, organized and determined. I do well under stressful situations.  
    </Typography>
    <Typography paragraph>
    I love hiking, gaming, cooking and hanging out with my husband and dog.
    </Typography>
    </div>
  </Paper>
  )
}

export default About 