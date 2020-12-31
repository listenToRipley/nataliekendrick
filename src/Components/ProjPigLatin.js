import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt"
import { FaJs} from "@react-icons/all-files/fa/FaJs";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import pigLatin from './projectImgs/pigLatin.png'
import './Components.css'

const PigLatin = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Pig Latin Translator"
    subheader="April 2020"
  />
  <CardMedia
    className='cardMedia'
    image={pigLatin}
    title="pig latin translator"
  />
  <CardContent>
  <Typography paragraph>
    Pig Latin translator page
  </Typography>
    <Typography className="pigLatinBadges">

      <FaHtml5 className="badges"/>
      <FaCss3Alt className="badges"/>
      <FaJs className="badges"/>

    </Typography>
      <Typography className="skills">
         HTML5, CSS, Javascript
      </Typography>
  <CardActions>
    <ButtonGroup fullWidth={true} variant="text" size="large" component="div">
      <Button className="viewButton" onClick={() => window.open('https://listentoripley.github.io/javascript-workbook/02week/pigLatin.html')}>
      View Site
      </Button>

      <Button className="viewButton" onClick={()=> window.open('https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/02week')}>
      View Code
      </Button>
      </ButtonGroup>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default PigLatin