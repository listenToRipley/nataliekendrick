import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import Button from '@material-ui/core/Button';
import mustacchio from './projectImgs/mustacchio.png';
import './Components.css'

const Mustacchio = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Mustacchio"
    subheader="January 2020"
  />
  <CardMedia
    className='cardMedia'
    image={mustacchio}
    title="Barbershop Main Page"
  />
  <CardContent>
  <Typography paragraph>
  A mock barbershop home page
  </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      <FaHtml5/>
      <FaCss3Alt/>
    </Typography>
      <Typography paragraph>
         HTML5, CSS
      </Typography>
  <CardActions>
    <Button onClick={() => window.open('https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/hairsalon/hairsalon.html')}>
    View Site
    </Button>

    <Button onClick={()=> window.open('https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/hairsalon')}>
    View Code
    </Button>

    </CardActions>
  </CardContent>
</Card>
  );
}

export default Mustacchio