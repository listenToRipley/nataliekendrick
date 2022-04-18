import React from 'react'
import { makeStyles } from '@mui/material';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/material.css';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({ 
  body:{
    color: 'white'
  }
})

const CodeSamples = () => {

  const classes = useStyles();

  return (
    <div className={classes.body}>
    <Typography 
    align='right' variant='h6'>Mastermind Logic</Typography>
    <Typography className="general" align='right'>Play a game of mastermind using Javascript</Typography>
    <CodeMirror
    value='

let board = []; &
  
let solution = ``; &

let letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`]; &
 
 
& function printBoard() { &
 &  for (let i = 0; i < board.length; i++) { &
    console.log(board[i]); & 
  } & 
 } & 
 
 & function generateSolution() { & 
  & for (let i = 0; i < 4; i++) { &
   & const randomIndex = getRandomInt(0, letters.length);  &
    solution += letters[randomIndex]; & 
  } & 
 } &
  &
 function getRandomInt(min, max) { & 
  & return Math.floor(Math.random() * (max - min)) + min; & 
 } &
  &
  function generateHint(guessFormatted) { &
    &
  let solutionArray = solution.split(``)  &
  &
  let guessArray = guessFormatted.split(``)  &
  &
  let correctLetterLocations = 0    &
  &
  let correctLetters = 0  &
  &
  let temporarySolution = []  &
  let leftOvers = []  &
  &
  for (let i = 0; i < solutionArray.length; i++) {  &
    &
    if(solutionArray[i] === guessArray[i]) {  &
      &
      temporarySolution.push(solutionArray[i])  &
      & } else {  &
        &
        & leftOvers.push(solutionArray[i])  &
    }  &
    & correctLetterLocations = temporarySolution.length  &
    &
   }  &
  &
  let once = []  &
  let moreThan = []  &
  &
  guessArray.forEach((gLetter) => {  &
    &
    if((once.includes(gLetter)) || temporarySolution.includes(gLetter)) {     &  
      moreThan.push(gLetter)    & 
    }  &
    else {  &
      once.push(gLetter)  &
    }  &
    &
    &
    if (moreThan.length > 0) {  &
      correctLetters = once.length  &
    }  &
    correctLetters = correctLetters  &
  })  &
  &
  console.log(`AFTER LOOPS 100% correct :` + correctLetterLocations)  &
  console.log(`AFTER LOOPS correct letters : ` + correctLetters)  &
  &
 return correctLetterLocations + `-`+ correctLetters  &
 }  &
 &
 function mastermind(guess) {  &
  &  solution = `abcd`;  &
    let guessFormatted = guess.trim().toLowerCase()  &
    &
    &
     if ((guessFormatted.length > 4) || (guessFormatted.length < 4)) {  &
      &  console.log(`your guess must be 4 characters long. Try again`)
      & }  &
    &
     if (guessFormatted === solution) {  &
      return `You guessed it!`  &
      & 
      & } else  if (board.length === 10){  &
      return `You ran out of turns! The solution was ` + solution  &  
      & } else {  &
      console.log(`guess should be here`, guessArray)  &
      & board.push(guessFormatted)  &
       & generateHint(guessFormatted)  &
    }  &
 }  
    '
    options={{
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
      lineSeparator: '&'
    }}
/>
 <Typography className="general"> View with on <a href='https://github.com/listenToRipley/javascript-workbook/blob/gh-pages/04week/mastermind.js'>Github</a></Typography>
    </div>
  )
}

export default CodeSamples 