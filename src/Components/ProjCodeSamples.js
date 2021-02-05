import React from 'react'
import {makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SampleBank from './SampleBank';
import SampleMastermind from './SampleMastermind';
import SampleController from './SampleController';
import SampleRPS from './SampleRPS';
import SampleTower from './SampleTower';

const useStyles = makeStyles({ 
  sample: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    marginLeft: '12%'
  },
  profiles: {
    marginTop: '2em',
    color: 'white'
  }
})

const CodeSamples = () => {

  const classes = useStyles();

  return (
    <div className={classes.sample}>
      <Typography variant='h5'>Sample code : </Typography>
      <SampleBank/>
      <SampleMastermind/>
      <SampleController/>
      <SampleRPS/>
      <SampleTower/>
     <div className={classes.profiles}>
     <Typography paragraph> If you would like to review additional project,  please feel free to go to <a href="https://repl.it/@listenToRipley">repl.  it</a> or my <a href="https://www.codewars.com/users/minonOfLight">code   wars</a> profiles</Typography>
       <Typography paragraph>As well as my <a href="https://github.com/  listenToRipley">github page</a></Typography>
     </div>
    </div>
  )
}

export default CodeSamples 