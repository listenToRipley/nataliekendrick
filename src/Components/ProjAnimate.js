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
import animate from './projectImgs/animate.png'
import './Components.css'

const Animate = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Animate"
    subheader="January 2020"
  />
  <CardMedia
    className='cardMedia'
    image={animate}
    title="animated boxes"
  />
  <CardContent>
  <Typography>
    Working with animation with CSS, hover each square to see the transitions
  </Typography>
    <Typography className="animateBadges">

      <FaHtml5 className="badges"/>
      <FaCss3Alt className="badges"/>

    </Typography>
      <Typography className="skills">
         HTML5, CSS
      </Typography>
  <CardActions>

    <ButtonGroup fullWidth={true} variant="text" size="large" component="div">
      <Button className="viewButton" onClick={() => window.open('https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/animate/animate.html')}>
      View Site
      </Button>
  
      <Button className="viewButton" onClick={()=> window.open('https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/animate')}>
      View Code
      </Button>
    </ButtonGroup>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default Animate