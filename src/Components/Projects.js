import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ToolTip from '@mui/material/Tooltip';
import CodeSample from './ProjCodeSamples';
import { makeStyles } from '@mui/material';
//badges
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaJs} from "@react-icons/all-files/fa/FaJs";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
//images
import animate from './projectImgs/animate.png';
import mustacchio from './projectImgs/mustacchio.png';
import nasa from './projectImgs/NASA.png';
import ticTacToe from './projectImgs/TicTacToe.png';
import silverSea from './projectImgs/SilverSea.png';
import clicknspin from './projectImgs/clicknspin.png';
import pigLatin from './projectImgs/pigLatin.png';
import dodgeball from './projectImgs/dodgeball.png';
import addressBook from './projectImgs/addressBook.png';
import smallBusiness from './projectImgs/smallBusiness.png';
import pantryPals from './projectImgs/pantryPals.png';

const useStyles = makeStyles({ 
  project:{
    display: 'block',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    marginLeft: '2%',
    alignSelf: 'center'
  },
  title: {
    display: 'block',
    fontSize: '3em',
    width: '100%',
    padding: '2%',
    marginTop: '-1.5em'
  },
  body: {
    display: 'block',
    margin: '2%',
    flexWrap: 'wrap',
    minWidth: '420px',
    width: '100vw',
    maxWidth: '100%'
  },
  cards: {
    display: 'flex',
    flexWrap:'wrap',
    marginLeft: '8em',
    alignSelf: 'start',
    minWidth: '375px',
    justifySelf: 'center',
    minHeight: '270em',
    maxHeight: '270em'
  },
  cardBody: {
    maxWidth: '345px',
    minWidth: '345px',
    margin: '2%',
    minHeight: '42em'
  },
  cardMedia: {
    width: '90%',
    height: '45%',
    paddingTop: '50.25%',
    marginTop: '0',
    marginLeft: '5%'
  },
  badges: {
    display: 'inline-flex',
    fontSize: '40px',
    paddingLeft: '15px',
    height: '1.2em',
  },
  eachBadge: {
    fontSize: '30px',
    marginLeft: '15px',
    marginTop: '2px',
    color: 'grey'
  },
  description:{
    height: '2.5em',
    marginTop: '5px',
    marginBottom: '5px',
    height: 'auto'
  },
  skills: {
    fontSize: '15px',
    color: 'grey',
    height: '2.2em',
    paddingTop: '-.1em',
    marginTop: '-.1em',
    marginBottom: ' -1.5em'
  },
  button: {
    marginTop: '15px',
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    marginBottom: 0

  },
  viewButtons: {
    fontSize: '17px',
    flex: 'auto',
  },
  additions: {
    margin: '5%',
    justifyContent:'center'
  },

})


const Projects = () => {
  const classes = useStyles();

  let group = [
    {num: 1,
    header: 'TARO',
    description: 'TARO (Texas Archival Resources Online)',
    image: '',
    imageTitle: 'Taro Page',
    badges: [ <FaCss3Alt/>, <FaJs/>, <FaReact/> ],
    color: '#3bb371',
    skills: ' CSS, Django, Javascript, myPHPSQL, React, XML',
    site: 'https://txarchives.org/home',
    code: <p>Due to this project being the property of The University of Texas at Austin Libraries, I am unable to share this code directly, but please feel free to review the contents on their <a href='https://github.com/utlibraries'>github</a> </p>,
    }
  ]


  let projects = [
    {
      num: 11,  
      header: 'Pantry Pals',
      completed: 'December 2020',
      image: pantryPals,
      imageTitle: 'pantry-pals',
      description: <p>Full stack app to keep track of shopping and pantry items, (MVP). Feel free to look over the <Link to={'/pantryPalsPlanning'}>planning process</Link></p>,
      badges: [ <FaCss3Alt/>, <FaJs/>, <FaReact/> ],
      color: '#3bb371',
      skills: ' CSS, Javascript, SQL, React',
      site: 'https://pantrypals.herokuapp.com/',
      code: 'https://github.com/listenToRipley/capstone',
    },
    {
      num: 10,  
      header: 'Small Business',
      completed: 'October 2020',
      image: smallBusiness,
      imageTitle: 'small business',
      description: 'A sample of small business registry',
      badges: [ <FaCss3Alt/>, <FaJs/>, <FaReact/> ],
      color: '#3bb371',
      skills: 'CSS, Javascript, React',
      site: 'https://listentoripley.github.io/small-business/#/',
      code: 'https://github.com/listenToRipley/small-business'
    },
    {
      num: 9,  
      header: 'Sample Address Book',
      completed: 'May 2020',
      image: addressBook,
      imageTitle: 'example address book',
      //this is going to need work 
      description: 'Using random user generateAPI to create a sample address book',
      badges: [<FaHtml5/>, <FaCss3Alt/>, <FaJs/>],
      color: '#dba71a',
      skills: 'HTML5, CSS, Javascript',
      site: 'https://listentoripley.github.io/javascript-workbook/07week/addressBook.html',
      code: 'https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/07week'
    },
    {
      num: 8,  
      header: 'Dodge Ball game',
      completed: 'May 2020',
      image: dodgeball,
      imageTitle: 'dodge ball drafting',
      description: 'Drafting dodge ball members',
      badges: [<FaHtml5/>, <FaCss3Alt/>, <FaJs/>],
      color: 'black',
      skills: 'HTML5, CSS, Javascript',
      site: 'https://listentoripley.github.io/javascript-workbook/06week/dodgeBall.html',
      code: 'https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/06week'
    },
    {
      num: 7,  
      header: 'Pig Latin Translator',
      completed: 'April 2020',
      image: pigLatin,
      imageTitle: 'pig latin translator',
      description: 'Pig Latin translator page',
      badges: [<FaHtml5/>, <FaCss3Alt/>, <FaJs/>],
      color: '#6d6966',
      skills: 'HTML5, CSS, Javascript',
      site: 'https://listentoripley.github.io/javascript-workbook/02week/pigLatin.html',
      code: 'https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/02week'
    },
    {
      num: 6,  
      header: 'Click and Spin',
      completed: 'March 2020',
      image: clicknspin,
      imageTitle: 'click and spin project',
      description: 'Spin counter ',
      badges: [<FaHtml5/>, <FaCss3Alt/>, <FaBootstrap/>],
      color: '#6496ec',
      skills: 'HTML5, CSS, Bootstrap',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/checkpoint3/click/click.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/checkpoint3'
    },
    {
      num: 5,  
      header: 'Silver Sea Website',
      completed: 'February 2020',
      image: silverSea,
      imageTitle: `Silver Sea's website`,
      description: 'Full website for Silver Sea Jewelry ',
      badges: [<FaHtml5/>, <FaCss3Alt/>],
      color: '#719996',
      skills: 'HTML5, CSS, Javascript',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/checkpoint2/checkpoint2.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/checkpoint2'
    },
    {
      num: 4,  
      header: 'Tic Tac Toe',
      completed: 'February 2020',
      image: ticTacToe,
      imageTitle: 'First Tic Tac Toe',
      description: 'First attempt at tic tac toe',
      badges: [<FaHtml5/>, <FaCss3Alt/>, <FaJs/>],
      color: '#818181',
      skills: 'HTML5, CSS',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/tictactoe/ttt.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/tictactoe'
    },
    {
      num: 3,  
      header: 'NASA Contact Page',
      completed: 'February 2020',
      image: nasa,
      imageTitle: 'NASA Contact Page',
      description: 'Basic information contact page for NASA',
      badges: [<FaHtml5/>, <FaCss3Alt/>],
      color: '#6f184b',
      skills: 'HTML5, CSS',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/flexbox/nasa.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/flexbox'
    },
    {
      num: 2,  
      header: 'Mustacchio',
      completed: 'February 2020',
      image: mustacchio,
      imageTitle: 'Barbershop Main Page',
      description: 'A mock barbershop home page',
      badges: [<FaHtml5/>, <FaCss3Alt/>],
      color: '#6b6b6b',
      skills: 'HTML5, CSS',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/hairsalon/hairsalon.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/hairsalon'
    },
    {
      num: 1,  
      header: 'Animate',
      completed: 'January 2020',
      image: animate,
      imageTitle: 'animated boxes',
      description: 'Working with animation with CSS, hover each square to see the transitions',
      badges: [<FaHtml5/>, <FaCss3Alt/>],
      color: '#d48c2a',
      skills: 'HTML5, CSS',
      site: 'https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/animate/animate.html',
      code: 'https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/animate'
    }
  ]

  const card = projects.map((proj, index) => 

    <Card className={classes.cardBody} key={proj.num}>
    <CardHeader
      classNam={classes.header}
      title={proj.header}
      subheader={proj.completed}
    />
    <CardMedia
      className={classes.cardMedia}
      image={proj.image}
      title={projects.subheader}
    />
    <CardContent>
    <p className={classes.description}>
      {proj.description}
    </p>

      <Typography className={classes.badges} color={proj.color}>
      { proj.badges.map((badge, index) => 
    <p key={index} className={classes.eachBadge}>
        {badge}
    </p> )}
      </Typography>
        <p paragraph className={classes.skills}>
           {proj.skills}
        </p>
    <CardActions>
      <ButtonGroup 
      fullWidth={true} 
      variant="text" size="large"
      className={classes.button}>
      <ToolTip title='see site'>
        <Button 
        className={classes.viewButtons}
        onClick={() => window.open(proj.site)}>
        View Site
        </Button>
        </ToolTip>

        <ToolTip title='see code'>
        <Button 
        className={classes.viewButtons}
        onClick={()=> window.open(proj.code)}>
        View Code
        </Button>
        </ToolTip>
      </ButtonGroup>
  
      </CardActions>
    </CardContent>
  </Card>
  )

  return (
   <div className={classes.project}>
   <Typography 
   className={classes.title} 
   variant='h4'
   >Portfolio</Typography>
    <div className={classes.cards}>
      {card}
    </div>
    <div className={classes.additions}>
    </div>
    <CodeSample/>
   </div>
  );
}

export default Projects 