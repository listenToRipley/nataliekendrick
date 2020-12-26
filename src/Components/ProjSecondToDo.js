import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt"
import { FaJs} from "@react-icons/all-files/fa/FaJs";
import Button from '@material-ui/core/Button';
import secondToDo from './projectImgs/secondToDo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: '50%',
    paddingTop: '56.25%', // 16:9
    marginTop:'30',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const SecondToDo = () => {
  const classes = useStyles();

  return (

<Card className={classes.root}>
  <CardHeader
    title="To Do List"
    subheader="March 2020"
  />
  <CardMedia
    className={classes.media}
    image={secondToDo}
    title="to do list"
  />
  <CardContent>
  <Typography paragraph>
    To Do List 
  </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      <FaHtml5/>
      <FaCss3Alt/>
      <FaJs/>
    </Typography>
      <Typography paragraph>
         HTML5, CSS, Javascript
      </Typography>
  <CardActions>
    <Button onClick={() => window.open('https://listentoripley.github.io/javascript-workbook/02week/todo.html')}>
    View Site
    </Button>

    <Button onClick={()=> window.open('https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/02week')}>
    View Code
    </Button>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default SecondToDo