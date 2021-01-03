import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaInstagram} from "@react-icons/all-files/fa/FaInstagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  contactInfo: {
    padding: theme.spacing(2),
    textAlign: 'center',
  }, 
}));



const Resume = () => {
  const classes = useStyles();

  return (
    <div className="resume">
      <Paper className={classes.paper}>
        <Grid
        container
        direction="row"
        jusitify="center"
        alignItems="center"
        spacing={2}>
          <Grid
          item xs={4}
          className='resumeLeft'> 
            <Typography>Natalie Kendrick</Typography>
            <p>Full Stack Developer</p>
            <p>___________________</p>
            <List>
              <ListItem>
               <ListItemAvatar>
                <FaGoogle/> 
               </ListItemAvatar>
               <ListItemText>
                  natalie.m.kendrick@gmail.com
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar>
                <FaPhoneAlt/> 
               </ListItemAvatar>
               <ListItemText>
                 (520)-404-3721
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar>
                <FaMapMarkerAlt/> 
               </ListItemAvatar>
               <ListItemText>
               Austin, TX
               </ListItemText>
              </ListItem>
            </List>
            <p>___________________</p>
            <List>
            <ListItem>JavaScript </ListItem>
            <ListItem>Node.js </ListItem>
            <ListItem>React</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>MySQL</ListItem>
            <ListItem>Express.js </ListItem>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS </ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>Heroku</ListItem>
            <ListItem>RESTful API</ListItem>
            <ListItem>Git/GitHub </ListItem>
            <ListItem>Strategic Planning </ListItem>
            <ListItem>Project Management</ListItem>
            <ListItem>Time Management</ListItem>
            <ListItem>Customer Service</ListItem>
            </List>

          </Grid>

          <Grid
          item xs={8}
          className='resumeRight'> 
            <Typography>About</Typography>
            <Paper className='separates'>___________________</Paper>
            <p>Hard-working professional with over 10 years of work experience in a variety of fields and a working knowledge of application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.</p>
  
            <Typography>Experience</Typography>
            <Paper className='separates'>___________________</Paper>
            <Typography>Procurement Card Administrator</Typography>
            <p><em>University of Texas at Austin + Purchasing Office , Austin, TX </em></p>
            <p><em>May 2015 - Present</em></p>
            <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                 Manage card usage and policy for approx. 1400  cards & more users
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Facilitate and resolve issues been user, the bank and internal systems 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                 Create processes to maintenance practices 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Create reports to manage & calibrate usage and purchasing needs 
                </ListItemText>
              </ListItem>
            </List>

            <Typography>Facilities Coordinator + Chief Problem Solver </Typography>
            <p><em>Pirkey Barber PLLC, Austin, TX</em></p>
            <p><em>Jun 2012 - May 2015</em></p>
            <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Maintain a Professional Office of over 30 employees 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Digital & physical documentations at multiple locations 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                 General office duties 
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
            <p><em>Iron Mountain, Austin, TX</em></p>
            <p><em>Feb 2011 - Jun 2012</em></p>
            <List>
              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Documentation Preparation 
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>~</ListItemAvatar>
                <ListItemText>
                Digital Imaging of Sensitive Documents 
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

            <Typography>Additional contact information</Typography>
            <Paper className='separates'>___________________</Paper>

            <Grid
              container
              direction="row"
              jusitify="center"
              alignItems="center"
              spacing={4}
              className={classes.contactInfo}>
            <Grid
              item={4}>
              <ListItem>
                <FaLinkedin/>
              </ListItem>
              <ListItem>
                @nataliemichellekendrick
              </ListItem>
              </Grid>

              <Grid
              item={4}> 
              <ListItem>
                <FaTwitterSquare/>
              </ListItem>
              <ListItem>
              @NKendrick12
              </ListItem>
              </Grid>

              <Grid
              item={4}>
              <ListItem>
                <FaGithubAlt/>
              </ListItem>
              <ListItem>
                @listenToRipley 
              </ListItem>
              </Grid>

              <Grid
              item={4}>
              <ListItem>
                <FaInstagram/>
              </ListItem>
              <ListItem>
                @garbosmile
              </ListItem>
              </Grid>

            </Grid>

            <Typography>References</Typography>
            <Paper className='separates'>___________________</Paper>
            <p>References available upon request as well as complete work history</p>

          </Grid>

        </Grid>
    </Paper>
    </div>
  )
}

export default Resume