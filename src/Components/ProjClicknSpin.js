import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import clicknspin from './projectImgs/clicknspin.png';
import './Components.css'

const ClicknSpin = () => {

return (

<Card className='cardBody'>
      <CardHeader
        title="Click and Spin"
        subheader="March 2020"
      />
      <CardMedia
        className='cardMedia'
        image={clicknspin}
        title="click and spin project"
      />
      <CardContent>
      <Typography paragraph>
          Spin counter
      </Typography>
        <Typography className="clickBadges">

          <FaHtml5 className="badges"/>
          <FaCss3Alt className="badges"/>
          <FaBootstrap className="badges"/>

        </Typography>
          <Typography className="skills">
             HTML5, CSS, Bootstrap
          </Typography>
      <CardActions>

        <ButtonGroup fullWidth={true} variant="text" size="large" component="div">
          <Button className="viewButton" onClick={() => window.open('https://listentoripley.github.io/ACA_web101_Natalie_Kendrick/src/checkpoint3/click/click.html')}>
          View Site
          </Button>
  
          <Button className="viewButton" onClick={() => window.open('https://github.com/listenToRipley/ACA_web101_Natalie_Kendrick/tree/master/src/checkpoint3')}>
          View Code
          </Button>
        </ButtonGroup>
  
        </CardActions>
      </CardContent>
    </Card>
   
  );
}

export default ClicknSpin