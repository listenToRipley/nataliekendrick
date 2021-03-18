import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profile from './projectImgs/profile.jpeg';
import background from './projectImgs/backdrop.jpeg'

const useStyles = makeStyles({ 
  about: {
    display: 'flex',
    width: '90vw',
    margin: '5%',
    padding: '5%'
  },
  pic: {
    display: 'inline',
    width: '100%',
    borderRadius: '165px',
    margin: '1%',
    padding: '1%'
  },
  name: {
    zIndex: '-1',
    width: '100%',
    justifySelf: 'center',
    fontFamily: `'Open Sans', sans-serif, 'Bold'`,
    fontWeight: 800,
    fontSize: '75px',
    marginTop: '-5%',
    marginLeft: '1.2em',
    marginBottom:'.3em',
    color: 'transparent',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundSize: '2650px 1440px',   
    MozBackgroundClip: 'text',
    textShadow: '2px 2px 3px rgba(255, 255, 255, 0.199)',
  },
  pronouns : {
    color: 'grey',
    justifySelf: 'center',
    alignSelf: 'center',
    marginLeft: '35%',
    marginTop: '-1em',
    marginBottom: '1em'
  },
  quote: {
    width: '100%',
    marginLeft: '7%',
    marginBottom: '2em'
  },
  body: {
    marginTop: '.5em',
    padding: '1%'
  }
})

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.about}>
    <Grid root spacing={3} className='aboutHeader' alignContent='space-evenly' noWrap='true'>
    <Grid container alignContent='center'>
    <Grid item xs={12} s={6} md={5} lg={3} alignItems='center'>
    <img
      className={classes.pic}
      alt='Natalie Kendrick' 
      src={profile}
     />
    </Grid>
      <Grid div item xs={12} s={6} md={5} lg={9} spacing={6} alignContent='space-evenly' >

     <p 
    className={classes.name}
    >Natalie Kendrick</p>
    <div className={classes.pronouns}>
      <em>pronouns: she/her/hers</em>
    </div>
      
     <div className={classes.quote}> 
      <em>
      “The most dangerous phrase in the language is we've always done”
    </em> ~ Grace Hopper
    </div>
      </Grid>
    <div className={classes.body}>
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
    </div>
    </Grid>
    </Grid>
  </Paper>

  )
}

export default About 