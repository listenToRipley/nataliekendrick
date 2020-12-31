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
import smallBusiness from './projectImgs/smallBusiness.png'
import './Components.css'

const SmallBusiness = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Small Business"
    subheader="October 2020"
  />
  <CardMedia
    className='cardMedia'
    image={smallBusiness}
    title="small business"
  />
  <CardContent>
  <Typography paragraph>
    A sample of small business registry
  </Typography>
    <Typography>
    <div className="smallBusinessView">
      <FaCss3Alt className="badges"/>
      <FaJs className="badges"/>
      <FaReact className="badges"/>    
    </div>  
    </Typography>
      <Typography className="skills">
         CSS, Javascript, React
      </Typography>
  <CardActions>
    
    <ButtonGroup fullWidth={true} variant="text" size="large" className="buttons">
      <Button className="viewButton" onClick={() => window.open('https://listentoripley.github.io/small-business/#/')}>
      View Site
      </Button>

      <Button className="viewButton" onClick={()=> window.open('https://github.com/listenToRipley/small-business')}>
      View Code
      </Button>
    </ButtonGroup>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default SmallBusiness