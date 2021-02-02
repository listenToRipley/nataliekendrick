import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import aca from './projectImgs/acaBadge.png';
import pima from './projectImgs/pima.png';
import backdrop from './projectImgs/backdrop.jpeg';

const useStyles = makeStyles((theme) => ({
  resume: {
    flexGrow: 1,
    flexWrap: 'wrap',
    direction: 'row',
    minWidth: '200px',
    fontFamily: 'Droid Sans',
    marginTop: '-3em',
    marginBottom: '5em'
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5em',
    maxWidth: 900,
  },
  separates: {
    display: 'block',
    color: 'transparent',
    backgroundImage: `url(${backdrop})`,
    backgroundRepeat: 'no-repeat'
  },
  left: {
    minWidth: '220px',
    alignSelf: 'flex-start'
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: '-1em',
    marginTop: '-1em'
  },
  name: {
    fontSize: 32,
    fontFamily: 'Droid Sans'
  },
  title: {
    fontSize: 20,
    marginTop: '.5em',
  },
  contactInfo: {
    padding: theme.spacing(2),
    marginTop: '-1.5em',
    marginBottom: '-2.2em',
    textAlign: 'center',
    flexWrap: 'wrap',
  }, 
  contactIcons: {
    marginLeft: '-2.5em',
    marginRight: '-2em',
    overflow: 'auto',
    maxHeight: 300,
  },
  contactText: {
    flexWrap: 'wrap',
    fontSize: '98%',
  },
  email: {
    color: '#4fb5dd',
  },
  eduIcons: {
    marginLeft: '-1.5em',
    marginRight: '-3em',
    overflow: 'auto',
    maxHeight: 300,
  },
  eduContact: {
    underline: 'hover'
  },
  eduLocation: {
   display: 'block',
   textAlign: 'end',
   marginTop: '-1em',
  },
  degree: {
    display: 'block',
    marginLeft:'1em',
    marginRight: '1em',
    fontSize: '.75em',
    fontStyle: 'italic',
    fontWeight:' fontWeightLight',
  },
  right: {
    width: '100%'
  },
  company: {
    fontStyle: 'italic',
    color: 'secondary',
    underline: 'hover'
  },
  additionalContact: {
    padding: '10px',
    display: 'flex',
    flex: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  contactGrid: {
    padding: '2%'
  },
  contactButton: {
    justify: 'center',
    backgroundColor: 'transparent'
  },

}));



const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.resume}>
      <Paper className={classes.paper}>
        <Grid
        container
        direction="row"
        jusitify="center"
        alignItems="center"
        spacing={'auto'}>
          <Grid
          item 
          xs={4}
          gutterBottom
          className={classes.left}> 
            <Typography className={classes.name}>Natalie Kendrick</Typography>
            <p className={classes.title}>Full Stack Developer</p>
            <p>________________</p>
            <List className={classes.contactInfo}>
              <ListItem>
               <ListItemAvatar className={classes.contactIcons}>
                <FaGoogle/> 
               </ListItemAvatar>
               <ListItemText disableTypography='true' className={classes.contactText}>
                  <Link className={classes.email} href='mailto: natalie.m.kendrick@gmail.com'>natalie.m.kendrick@gmail.com</Link>
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar className={classes.contactIcons}>
                <FaPhoneAlt/> 
               </ListItemAvatar>
               <ListItemText disableTypography='true' className={classes.contactText}>
                 (520)-404-3721
               </ListItemText>
              </ListItem>

              <ListItem>
               <ListItemAvatar disableTypography='true' className={classes.contactIcons}>
                <FaMapMarkerAlt/> 
               </ListItemAvatar>
               <ListItemText className={classes.contactText}>
               Austin, TX
               </ListItemText>
              </ListItem>
            </List>
            <p>________________</p>
            <List>
              <ListItem className={classes.sectionTitle}>Education</ListItem>
              <ListItem className={classes.eduIcons}>
              <ListItemAvatar>
                <Avatar 
                className={classes.avatar}
                alter='AustinCodingAcademy Badge' 
                src={aca}
                />
              </ListItemAvatar>
              <Link className={classes.eduContact}
               href='https://austincodingacademy.com/'>AUSTIN CODING ACADEMY</Link>
              </ListItem>
              <ListItem className={classes.eduLocation}>Austin, TX</ListItem>
              <Typography className={classes.degree}>Full Stack Developer  (Dec 2020)</Typography>
              <ListItem
              className={classes.eduIcons}>
              <ListItemAvatar>
                <Avatar 
                className={classes.avatar}
                alter='Pima Community College Logo' 
                src={pima}
                />
              </ListItemAvatar>
              <Link
              className={classes.eduContact}
              href='https://www.pima.edu/'> PIMA COMMUNITY COLLEGE </Link>
              </ListItem>
              <ListItem className={classes.eduLocation}>Tucson, AZ</ListItem>
              <Typography className={classes.degree}>General Studies Associate's Degree Liberal Arts 
(Dec 2010)</Typography>
            </List>
            <p>________________</p>
            <List className={classes.skillsList}>
            <ListItem className={classes.sectionTitle} >Skills</ListItem>
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
          className={classes.right}> 
            <Typography>About</Typography>
            <Paper className={classes.separates}>___________________</Paper>
            <p>Hard-working professional with over 10 years of work experience in a variety of fields and a working knowledge of application development, database design and the importance of leveraging those skills in creative and innovative approaches to problems while synthesizing the business and client needs.</p>
  
            <Typography>Experience</Typography>
            <Paper className={classes.separates}>___________________</Paper>
            <Typography>Procurement Card Administrator</Typography>
            <Link href="https://procard.financials.utexas.edu/" className={classes.company}>University of Texas at Austin + Purchasing Office , Austin, TX</Link>
            <br/>
            <em>May 2015 - Present</em>
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
            <Link href="https://www.pirkeybarber.com/" className={classes.company}>Pirkey Barber PLLC, Austin, TX</Link>
            <br/>
            <em>Jun 2012 - May 2015</em>
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
            <Link href="https://www.ironmountain.com/" className={classes.company}>Iron Mountain, Austin, TX</Link>
            <br/>
            <em>Feb 2011 - Jun 2012</em>
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
            <Paper className={classes.separates}>___________________</Paper>

            <div
              className={classes.additionalContact}>
            <div
              className={classes.contactGrid}
              >
               <Button className={classes.contactButton} 
                  variant="contained"
                  aria-label="linked in"
                  startIcon={<FaLinkedin color={'blue'}/>}
                  onClick={() => window.open('https://www.linkedin.com/in/nataliemichellekendrick/')}
                  >
                    @nataliemichellekendrick
                 </Button>
              </div>

              <div
              className={classes.contactGrid}> 
                <Button className={classes.contactButton} 
                 variant="contained"
      
                 aria-label="twitter contact"
                 startIcon={<FaTwitterSquare color={'skyBlue'} />}
                 onClick={() => window.open('https://twitter.com/NKendrick12')}
                 >
                   @NKendrick12
                 </Button>
              </div>

              <div
              className={classes.contactGrid}>
              <Button className={classes.contactButton} 
               variant="contained"
        
               aria-label="github contact"
               startIcon={<FaGithubAlt color={'maroon'} />}
               onClick={() => window.open('https://github.com/listenToRipley')}
               >
                 @listenToRipley 
               </Button>
              </div>

              <div
              className={classes.contactGrid}>
              <Button className={classes.contactButton} 
              variant="contained"
              aria-label="instagram contact"
              startIcon={<FaInstagram color={'red'}/>}
              onClick={() => window.open('https://www.instagram.com/garbosmile/?hl=en')}
              >
                @garbosmile
              </Button>
              </div>

            </div>

            <Typography>References</Typography>
            <Paper className={classes.separates}>___________________</Paper>
            <p>References available upon request as well as complete work history</p>

          </Grid>

        </Grid>
    </Paper>
    </div>
  )
}

export default Resume