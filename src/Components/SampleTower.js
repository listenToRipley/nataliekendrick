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

const SampleTower = () => {
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
    </div>
  )
}

export default SampleTower