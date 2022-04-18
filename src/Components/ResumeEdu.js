import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'
import aca from './projectImgs/acaBadge.png';
import pima from './projectImgs/pima.png';
import backdrop from './projectImgs/backdrop.jpeg';

// const useStyles = makeStyles((theme) => ({
//   eduBody: {
//     marginBottom: '3em'
//   },
//   sectionTitle: {
//     fontSize: 20,
//     marginTop: '-1em'
//   },
//   separates: {
//     display: 'block',
//     color: 'white',
//     backgroundImage: `url(${backdrop})`,
//     backgroundRepeat: 'no-repeat',
//     marginBottom: '1em',
//   },
//   eduIcons: {
//     marginRight: '4em',
//     overflow: 'auto',
//   },
//   eduContact: {
//     underline: 'hover'
//   },
//   eduLocation: {
//    display: 'block',
//    textAlign: 'end',
//    marginTop: '-4em',
//   },
//   degree: {
//     display: 'block',
//     marginLeft:'1em',
//     marginRight: '1em',
//     marginBottom: '2em',
//     fontSize: '1em',
//     fontStyle: 'italic',
//     fontWeight:' fontWeightLight',
//   }

// }));

const ResumeEdu = () => {

  // const classes = useStyles();

  return(
    <div className="eduBody">
      <List>
        <Paper className="separates">
          <ListItem className="sectionTitle">Education</ListItem>
        </Paper>
          <ListItem className="eduIcons">
          <ListItemAvatar>
            <Avatar 
            className="avatar"
            alter='AustinCodingAcademy Badge' 
            src={aca}
            />
          </ListItemAvatar>
          <Link className="eduContact"
           href='https://austincodingacademy.com/'>AUSTIN CODING ACADEMY</Link>
          </ListItem>
          <Typography className="degree">Full Stack Developer  (Dec 2020)</Typography>
          <ListItem className="eduLocation">Austin, TX</ListItem>
          <ListItem
          className="eduIcons">
          <ListItemAvatar>
            <Avatar 
            className="avatar"
            alter='Pima Community College Logo' 
            src={pima}
            />
          </ListItemAvatar>
          <Link
          className="eduContact"
          href='https://www.pima.edu/'> PIMA COMMUNITY COLLEGE </Link>
          </ListItem>
          <Typography className="degree">General Studies Associate's Degree Liberal Arts (Dec 2010)</Typography>
          <ListItem className="eduLocation">Tucson, AZ</ListItem>
            </List>
    </div>
  )
} 

export default ResumeEdu