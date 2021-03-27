import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontSize: 20,
    marginTop: '-1em'
  },
  separates: {
    display: 'block',
    color: 'white',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat'
  },
  company: {
    display: 'flex',
    fontStyle: 'italic',
    color: 'secondary',
    underline: 'hover',
  },
  duty: {
    fontSize: 10
  }
}));


const ResumeExp = () => {

  const classes = useStyles();

  const experiences = [
    { 
      company: 'University of Texas at Austin + Purchasing Office',
      site: 'https://procard.financials.utexas.edu/',
      type:'Educational Institution',
      title: 'Procurement Card Administrator',
      tenure: 'May 2015 - Present',
      div: '~',
      res: [
        'Manage card usage & policy for approx. 1400+ cards & users',
        'Facilitate & resolve issues between multi-parties',
        'Create & maintain consistent, secure & effective processes for users',
        'Construct & analyze reports to calibrate operations by verifying usage is in alignment with purchasing policy & users expectations '
      ],
    },
    {
      company: 'Pirkey Barber PLLC, Austin, TX',
      site: 'https://www.pirkeybarber.com/',
      type:'Intellectual Property Law Firm',
      title: 'Facilities Coordinator + Chief Problem Solver',
      tenure: 'Jun 2012 - May 2015',
      div: '~',
      res: [
        'Maintained a professional office of 30+ employees',
        'Manage digital & physical documentations in multiple locations',
        'General office duties: reception work, receiving goods, placing orders, facilitating events, mail processing, hardware maintenance',
        'Training & supervision of 3 employees'
      ],
    }, 
    {
       company: 'Iron Mountain, Austin, TX',
       site: 'https://www.ironmountain.com/',
       type:'Records Management',
       title: 'DMS Specialist + Warehouse Assistant',
       tenure: 'Feb 2011 - Jun 2012',
       div: '~',
       res: [
        'Receiving & preparation of documentation',
        'Digital Imaging of confidential information',
        'Quality Control',
        'Data Entry'
       ],
    }

  ]

  //   company: '',
  //   site: '',
  //   type:'',
  //   title: '',
  //   tenure: '',
  //   div: '',
  //   res: [],


  const profHistory = experiences.map((each) => {
    return (
      <div>
      <Typography>{each.title}</Typography>
      <Link className={classes.company}>
        <p>{each.company} ~ {each.type}</p>
      </Link>
      <em>{each.tenure}</em>
      <List>
        {each.res.map((duty) => {
          return(
            <div>
            <ListItem>
              <ListItemAvatar>{each.div}</ListItemAvatar>
              <ListItemText className={classes.duty}>{duty}</ListItemText>
            </ListItem>
          </div>
          )
        })}
      </List>
      </div>
    )
  })

  return(
    <div>            
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Experience</ListItem>
      </Paper>

      {profHistory}
    <br/>
    </div>
  )
} 

export default ResumeExp