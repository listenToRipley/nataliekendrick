import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import animate from './projectImgs/animate.png';
import './Components.css';

const AllProjects = () => {

  let projects = [
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
    <div>
      {each}
    </div>
  );
}

export default AllProjects