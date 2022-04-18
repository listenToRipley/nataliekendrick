import React from 'react'
import { makeStyles } from '@mui/material';
import {Controlled as CodeMirror} from 'react-codemirror2'
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

const SampleTower = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography
        align='right' 
        variant='h6'>
      Towers of Hanoi Sample
      </Typography>
      <Typography align='right'> A solution for Towers of Hanoi, pseudo code included.</Typography>
      <CodeMirror
        value='
        `use strict`; &
        
        const assert = require(`assert`); &
        const readline = require(`readline`); &
        const rl = readline.createInterface({ &
          input: process.stdin, &
          output: process.stdout &
        }); &
        
        //remember, these are your towers/ your board &
      let stacks = { &
        a: [4, 3, 2, 1], &
        b: [], & 
        c: [] &
      }; &
 
  function printStacks() { &
    console.log("a: " + stacks.a); &
    console.log("b: " + stacks.b); &
    console.log("c: " + stacks.c); &
  } &
 
  //this will always be your starting state  &
    //if this is placed here, then all functions should be able to use these variables &

  function movePiece(startPoint, endPoint) { &
 &
  //establish the index of your array in each object &
    let lastInStackIndex = startPoint.length-1 &

    //take the last item off of stack and move it &
    let removeFrom = startPoint.pop(lastInStackIndex) &

  //all ends should push the pop item on the next index,
      //need to push the popped it here, which is what  &we were doing below
    let moveTo = endPoint.push(removeFrom) &

    //LAST THREE SHOULD BE DAISY CHAINED &
      return moveTo &
  } &

  function isLegal(starter, ender) { &

      //access the stack &
      let startPoint = stacks[starter] &
      let endPoint = stacks[ender] &

    //since it is is Legal, not is Legal, any falsys should be trues  &
      // console.log(`inside is legal start point: `, startPoint) &
      // console.log(`inside is legal end points: `, endPoint) &

          //the array you are trying to move from is empty &
        if (startPoint.length === 0) { &
          return false &
        }  &
      //the array you are trying move to is empty &
        if (endPoint.length === 0) { &
          return true &
        } &

        //need to asses the last item in the index of your current move  &
        let lastIndexStart = startPoint.length-1 &
        let lastIndexEnd = endPoint.length-1 &

     if( &
      //the array you a try move to has a value which is greater already in it  &
      (startPoint[lastIndexStart] < endPoint[lastIndexEnd]) &
      // of the starting position happens to be the same as the end position  &
        && (startPoint !== endPoint)) { &
      return true &
    } else { &
      return false &
    } &

  } &

  function checkForWin() { &

    //you move all your values from stack a to stack c and the order is the same as the beginning &
  if(stacks.b.length === 4 || stacks.c.length === 4) { &
    return true  &
  } else { &
    return false  &
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
        <Typography className="general">View with on <a href='https://github.com/listenToRipley/javascript-workbook/blob/gh-pages/03week/towersOfHanoi.js'>Github</a></Typography>
    </div>
  )
}

export default SampleTower