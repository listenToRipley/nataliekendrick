//js

//

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
import SampleBank from './SampleBank';
import SampleMastermind from './SampleMastermind'

const CodeSamples = () => {

  return (
    <div className='codeSamples'>
      <Typography variant='h5'>Sample code : </Typography>
      <SampleBank/>
      <SampleMastermind/>
     <div className='sampleProfiles'>
     <Typography paragraph> If you would like to review additional project,  please feel free to go to <a href="https://repl.it/@listenToRipley">repl.  it</a> or my <a href="https://www.codewars.com/users/minonOfLight">code   wars</a> profiles</Typography>
       <Typography paragraph>As well as my <a href="https://github.com/  listenToRipley">github page</a></Typography>
     </div>
    </div>
  )
}

export default CodeSamples 