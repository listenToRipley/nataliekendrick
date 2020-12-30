import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt"
import { FaJs} from "@react-icons/all-files/fa/FaJs";
import Button from '@material-ui/core/Button';
import pantryPals from './projectImgs/pantryPals.png'
import './Components.css'

const PantryPals = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Pantry Pals"
    subheader="December 2020"
  />
  <CardMedia
    className='cardMedia'
    image={pantryPals}
    title="pantry pals"
  />
  <CardContent>
  <Typography paragraph>
    An full stack application meant to help with keeping track of items that you need to shopping and what you already have at home.
  </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      <FaCss3Alt/>
      <FaJs/>
      <p>SQL</p>
      <FaReact/>      
    </Typography>
      <Typography paragraph>
         CSS, Javascript, SQL ,React
      </Typography>
  <CardActions>
    <Button onClick={() => window.open('https://pantrypals.herokuapp.com/')}>
    View Site
    </Button>

    <Button onClick={()=> 'link to PantryPalPlanning component'}>
    View Planning
    </Button>

    <Button onClick={()=> window.open('https://github.com/listenToRipley/capstone')}>
    View Code
    </Button>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default PantryPals