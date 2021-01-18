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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import pantryPals from './projectImgs/pantryPals.png';
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
  <Typography>
    An full stack application keeping track of shopping and pantry items.
  </Typography>
    <Typography className="pantryBadges">

      <FaCss3Alt className="badges"/>
      <FaJs className="badges"/>
      <FaReact className="badges"/>      

    </Typography>
      <Typography className="skills">
         CSS, Javascript, SQL, React
      </Typography>
  <CardActions>

    <ButtonGroup fullWidth={true} variant="text" size="large" component="div" className="eachBadge">
    <Button className="viewButton" onClick={() => window.open('https://pantrypals.herokuapp.com/')}>
    View Site
    </Button>

    <Button className="viewButton" align='center' component={Link} to={'/pantryPalsPlanning'} >
    View Planning
    </Button>

    <Button className="viewButton" onClick={()=> window.open('https://github.com/listenToRipley/capstone')}>
    View Code
    </Button>
    </ButtonGroup>
    </CardActions>
  </CardContent>
</Card>

  );
}

export default PantryPals