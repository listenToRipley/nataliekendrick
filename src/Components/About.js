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
    <p className="aboutQuote">   
    <em>
    “The most dangerous phrase in the language is we've always done”
    </em> ~ Grace Hopper</p>
    <div className="aboutBody">
    <Typography paragraph>
    I am motivated professional with extensive experiences ranging from web development to fine arts to customer service. Due to this, I bring a unique protective to the table. I believe in continuous learner, big picture thinking and while keeping in mind business needs. I am flexible, organized and determined.
    </Typography>
    <Typography> I am also goal-orientated and creatively drive. I am passionate about making sure everyone get what they need from the project. This makes me a self starter who thrives in when it comes to problem solving. I am also keep an eye on my team to make sure they have what they need to succeed as well. I believe that my team success is my own.</Typography>
    <Typography paragraph>
    In my spare time I love to read, hike with my dog, doing yoga, and play board games. I love, love, love food and cooking. 
    </Typography>
    </div>
  </Paper>
  )
}

export default About 