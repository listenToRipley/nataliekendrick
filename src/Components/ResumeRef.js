import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import backdrop from './projectImgs/backdrop.jpeg';

// const useStyles = makeStyles((theme) => ({
//   sectionTitle: {
//     fontSize: 20,
//     marginTop: '-1em'
//   },
//   separates: {
//     display: 'block',
//     color: 'white',
//     backgroundImage: `url(${backdrop})`,
//     backgroundRepeat: 'no-repeat'
//   },
//   ref: {
//     margin: '1em'
//   }
// }));



const ResumeRef = () => {
  // const classes = useStyles();

//would like to add testimonials 

  return(
    <div>
    <Paper className="separates">
      <ListItem className="sectionTitle">References</ListItem>
    </Paper>
    <Typography className="ref">References available upon request</Typography>
    </div>
  )
} 

export default ResumeRef