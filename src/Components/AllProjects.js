import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
//badges
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaJs} from "@react-icons/all-files/fa/FaJs";
//images
import animate from './projectImgs/animate.png';
import mustacchio from './projectImgs/mustacchio.png';
import nasa from './projectImgs/NASA.png';
import ticTacToe from './projectImgs/TicTacToe.png';
import silverSea from './projectImgs/SilverSea.png';

import './Components.css';

const AllProjects = () => {

  let projects = [
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


  const each = projects.map((proj, index) => 

    <Card className='cardBody' key={proj.num}>
    <CardHeader
      title={proj.header}
      subheader={proj.completed}
    />
    <CardMedia
      className='cardMedia'
      image={proj.image}
      title={projects.subheader}
    />
    <CardContent>
    <Typography>
      {proj.description}
    </Typography>

      <Typography className='badges' color={proj.color}>
      {
          proj.badges.map((badge, index) => 

    <p key={index} className='eachBadge'>
        {badge}
    </p>
          )
        }
      </Typography>

  
      
        <Typography className="skills">
           {proj.skills}
        </Typography>
    <CardActions>
  
      <ButtonGroup fullWidth={true} variant="text" size="large" component="div">
        <Button className="viewButton" onClick={() => window.open(proj.site)}>
        View Site
        </Button>
    
        <Button className="viewButton" onClick={()=> window.open(proj.code)}>
        View Code
        </Button>
      </ButtonGroup>
  
      </CardActions>
    </CardContent>
  </Card>
  )

  return (
    <div className='projectCards'>
      {each}
    </div>
  );
}

export default AllProjects