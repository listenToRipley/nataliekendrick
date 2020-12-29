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
import musicDashboard from './projectImgs/musicDashboard.png'
import './Components.css'

const MusicDashboard = () => {

return (

<Card className='cardBody'>
  <CardHeader
    title="Music Dashboard"
    subheader="March 2020"
  />
  <CardMedia
    className='cardMedia'
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