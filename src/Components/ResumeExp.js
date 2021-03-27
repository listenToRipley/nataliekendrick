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
    fontStyle: 'italic',
    color: 'secondary',
    underline: 'hover'
  },

}));


const ResumeExp = () => {

  const classes = useStyles();

  const experiences = [
    { 
      company: '',
      site: '',
      title: '',
      tenure: '',
      res: [],

    }
  ]

  return(
    <div>            
      <Paper className={classes.separates}>
        <ListItem className={classes.sectionTitle}>Experience</ListItem>
      </Paper>
        <Typography>Procurement Card Administrator</Typography>
      <Link href="https://procard.financials.utexas.edu/" className={classes.company}>University of Texas at Austin + Purchasing Office , Austin, TX  ~ Edu.Institution </Link>
      <br/>
      <em>May 2015 - Present</em>
      <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Manage card usage & policy for approx. 1400+ cards & users
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Facilitate & resolve issues between multi-parties 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Create & maintain consistent, secure & effective processes for users 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Construct & analyze reports to calibrate operations by verifying usage is in alignment with purchasing policy & users expectations 
                </ListItemText>
              </ListItem>
            </List>

            <Typography>Facilities Coordinator + Chief Problem Solver</Typography>
            <Link href="https://www.pirkeybarber.com/" className={classes.company}>Pirkey Barber PLLC, Austin, TX ~ Intellectual Property Law Firm</Link>
            <br/>
            <em>Jun 2012 - May 2015</em>
            <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Maintained a professional office of 30+ employees 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Manage digital & physical documentations in multiple locations
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                General office duties: reception work, receiving goods, placing orders, facilitating events, mail processing, hardware maintenance 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Supervisor of 3 employees  
 
                </ListItemText>
              </ListItem>
            </List>

            <Typography>DMS Specialist + Warehouse Assistant </Typography>
            <Link href="https://www.ironmountain.com/" className={classes.company}>Iron Mountain, Austin, TX ~ Records Management</Link>
            <br/>
            <em>Feb 2011 - Jun 2012</em>
            <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Receiving & preparation of documentation
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Digital Imaging of confidential information
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Quality Control 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Data Entry    
                </ListItemText>
              </ListItem>
            </List>

    </div>
  )
} 

export default ResumeExp