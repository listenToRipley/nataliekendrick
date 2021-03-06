import React from 'react';
import {makeStyles} from '@material-ui/core';
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
import ToolTip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import pantryPals from './projectImgs/pantryPals.png';

const useStyles = makeStyles({ 
  body:{
    maxWidth: '345px',
    minWidth: '345px',
    margin: '2%',
    alignItem: 'space-around',
    justifySelf: 'center'

  },
  media: {
    width: '90%',
    height: '45%',
    paddingTop: '56.25%',
    marginLeft: '5%'
  },
  badges: {
    display: 'inline-flex',
    fontSize: '40px',
    paddingLeft: '15px',
    height: '1.2em',
  },
  eachBadge: {
    marginLeft: '15px',
    marginTop: '-10px',
  },
  pBadge:{
    fontSize: '30px',
    marginLeft: '15px',
    marginTop: '2px',
    marginBottom:'1px',
    color: 'grey'
  },
  description:{
    height: '2.5em',
    marginTop: '-5px',
    marginBottom: '5px'
  },
  skills: {
    fontSize: '15px',
    color: 'grey',
    marginTop: '-.5em',
    marginBottom: ' -.5em'
  },
  viewButtons: {
    fontSize: '14px'
  },
  button: {
    marginBottom: '15px'
  }

})

const PantryPals = () => {

  const classes = useStyles();

return (

<Card className={classes.body}>
  <CardHeader
    title="Pantry Pals"
    subheader="December 2020"
  />
  <CardMedia
    className={classes.media}
    image={pantryPals}
    title="pantry pals"
  />
  <CardContent>
  <p className='description'>
    An full stack application keeping track of shopping and pantry items.
  </p>
    <Typography className={classes.badges}>

    <p className={classes.eachBadge}>
      <FaCss3Alt className={classes.pBadge}/>
      <FaJs className={classes.pBadge}/>
      <FaReact className={classes.pBadge}/>  
    </p>    

    </Typography>
      <p className={classes.skills}>
         CSS, Javascript, SQL, React
      </p>
  <CardActions>

    <ButtonGroup 
    fullWidth={true} 
    variant="text" 
    size="large" 
    component="div" 
    className={classes.button}>
    <ToolTip title='see-site'>
    <Button 
    className={classes.viewButtons}
    onClick={() => window.open('https://pantrypals.herokuapp.com/')}>
    View Site
    </Button>
    </ToolTip>

    <ToolTip title='see-planning'>
    <Button 
    className={classes.viewButtons}
    align='center' component={Link} 
    to={'/pantryPalsPlanning'} >
    View Planning
    </Button>
    </ToolTip>

    <ToolTip title='see-code'>
    <Button 
    className={classes.viewButtons}
    onClick={()=> window.open('https://github.com/listenToRipley/capstone')}>
    View Code
    </Button>
    </ToolTip>
    </ButtonGroup>
    </CardActions>
  </CardContent>
</Card>

  );
}

export default PantryPals