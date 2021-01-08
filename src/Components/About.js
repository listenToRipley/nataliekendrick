import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import './Components.css';

const About = () => {
  return (
    <Paper className="aboutPage">
    <Typography align={'center'} variant="h2" component="h3" gutterBottom>
      Natalie Kendrick
    </Typography> 
    <Typography paragraph>
      Native desert rat of Tucson Arizona, current transplant to Austin Texas. 
    </Typography>
    <Typography paragraph> Natalie is passionate about coding, animals, cooking and movies.</Typography>
  </Paper>
  )
}

export default About 