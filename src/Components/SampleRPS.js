import React from 'react'
import { makeStyles } from '@material-ui/core';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/material.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({ 
  body:{
    color: 'white'
  }
})

const SampleRPS = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography
        align='right' 
        variant='h6'>
        Rock, Paper, Scissors
      </Typography>
      <Typography>Possible solution for rock, paper, scissors. pseudo code included.</Typography>
      <CodeMirror
        value='
        `use strict`; &
  // brings in the assert module for unit testing &
const assert = require(`assert`); &
// brings in the readline module to access the command line &
const readline = require(`readline`); &
// use the readline module to print out to the command line &
const rl = readline.createInterface({ &
  input: process.stdin,   &
  output: process.stdout &
}); &

// the function that will be called by the unit test below &
const rockPaperScissors = (hand1, hand2) => { &
  // Use the unit test to see what is expected &

  let formattedHand1 = hand1.trim().toLowerCase() &
  let formattedHand2 = hand2.trim().toLowerCase() &
  
  const rh1 = (formattedHand1 === `rock`) 
  const ph1 = (formattedHand1 === `paper`) 
  const sh1 = (formattedHand1 === `scissors`) &
  
  const rh2 = (formattedHand2 === `rock`) 
  const ph2 = (formattedHand2 === `paper`) 
  const sh2 = (formattedHand2 === `scissors`) &
  
  const tie = (rh1 && rh2) || (sh1 && sh2) || (ph1 && ph2) 
  const winner1 = (rh1 && sh2) || (ph1 && rh2) || (sh1 && ph2) 
  const winner2 = (ph1 && sh2) || (rh1 && ph2) || (sh1 && rh2)  &
  
  let wrong = (!(winner1) && !(winner2)) &
  
  if (tie) { &
    return "It`s a tie!" &
  } &
  else if (winner1) { &
    return `Hand one wins!` &
  
  } else if (winner2) { &
    return `Hand two wins!` &
  
  }  &
  else if (wrong) { &
    return `This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.`  &
  } &
  
  } &
  ' 
        options={{ 
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        lineSeparator: '&'
    }}
      />
    <Typography className="general">View with on <a href='https://github.com/listenToRipley/javascript-workbook/blob/gh-pages/01week/rockPaperScissors.js'>Github</a></Typography>
    </div>
  )
}

export default SampleRPS