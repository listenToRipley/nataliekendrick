//js

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/05week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/04week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/03week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/01week

//backend

//https://github.com/listenToRipley/311_checkpoint_1
//https://github.com/listenToRipley/311_wk4_day2_node_mysql
//https://github.com/listenToRipley/311_wk5_both_api_hackathon

//https://github.com/listenToRipley/311_wk4_day2_node_mysql/blob/master/controllers/users.js

//https://github.com/AustinCodingAcademy/311_wk6_day2_authentication/blob/master/index.js
import React from 'react'
import Typography from '@material-ui/core/Typography';
import SampleBank from './SampleBank'

const CodeSamples = () => {

 let ref='https://raw.githubusercontent.com/listenToRipley/javascript-workbook/gh-pages/05week/bankAccount.js'

  return (
    <div>
      <Typography variant='h4'>Below you will find sample code</Typography>
      <SampleBank/>
      <Typography paragraph> Or general samples of work <a href="https://repl.it/@listenToRipley">repl.it</a> or with <a href="https://www.codewars.com/users/minonOfLight">code wars</a> </Typography>
      <Typography paragraph>As well as my <a href="https://github.com/listenToRipley">github page</a></Typography>
    </div>
  )
}

export default CodeSamples 