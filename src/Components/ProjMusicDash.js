import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import musicDashboard from './projectImgs/musicDashboard.png'

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

const MusicDashboard = () => {
  const classes = useStyles();

  return (

<Card className={classes.root}>
  <CardHeader
    title="Music Dashboard"
    subheader="March 2020"
  />
  <CardMedia
    className={classes.media}
    image={musicDashboard}
    title="music dashboard"
  />
  <CardContent>
  <Typography paragraph>
    A collaborative sample music dashboard created with a sample login and basic dashboard 
  </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      <FaCss3Alt/>
      <FaJs/>
      <FaReact/>      
    </Typography>
      <Typography paragraph>
         CSS, Javascript, React
      </Typography>
  <CardActions>
    <Button onClick={() => window.open(' ')}>
    View Site
    </Button>

    <Button onClick={()=> window.open('https://github.com/petegilk/music-app')}>
    View Code
    </Button>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default MusicDashboard