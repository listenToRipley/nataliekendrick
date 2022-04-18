import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import backdrop from './projectImgs/backdrop.jpeg';

// const useStyles = makeStyles((theme) => ({ 
//   separates: {
//     display: 'block',
//     color: 'transparent',
//     backgroundImage: `url(${backdrop})`,
//     backgroundRepeat: 'no-repeat'
//   },
//   sectionTitle: {
//     fontSize: 20,
//     marginTop: '-1em'
//   },
//   mission: {
//     marginBottom: '3em',
//     marginLeft: '1em',
//     marginRight: '2em',
//     padding: '1em',
//     justifyText: 'center'
//   }
// }));

const ResumeMission = () => {

  // const classes = useStyles();

  return (
    <div>
    <Paper className="separates">
        <ListItem className="sectionTitle">Mission</ListItem>
      </Paper>
      <Typography className="mission" align="center">
        After working in a variety of fields I have developed a comprehensive knowledge base for effective business practices, including:  application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.
      </Typography>
    </div>
  )

};

export default ResumeMission;