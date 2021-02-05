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

      </Typography>
      <CodeMirror
        value='
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