import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Buttom from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt"
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap"
import Button from '@material-ui/core/Button';
import clicknspin from './projectImgs/clicknspin.png'
import nasa from './projectImgs/NASA.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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

const Projects = () => {
  const classes = useStyles();

  return (
   <div>

<Card className={classes.root}>
      <CardHeader
        title="Click and Spin"
        subheader="January 2020"
      />
      <CardMedia
        className={classes.media}
        image={clicknspin}
        title="click and spin project"
      />
      <CardContent>
      <Typography paragraph>
          Spin counter
      </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <FaHtml5/>
          <FaCss3Alt/>
          <FaBootstrap/>
        </Typography>
          <Typography paragraph>
             HTML5, CSS, Bootstrap
          </Typography>
      <CardActions disableSpacing>
        <Button>
        View Site
        </Button>
 
        <Button>
        View Code
        </Button>
  
        </CardActions>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardHeader
        title="NASA Contact Page"
        subheader="January 2020"
      />
      <CardMedia
        className={classes.media}
        image={nasa}
        title="NASA Contact Page"
      />
      <CardContent>
      <Typography paragraph>
      Basic information contact page
      </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <FaHtml5/>
          <FaCss3Alt/>
        </Typography>
          <Typography paragraph>
             HTML5, CSS
          </Typography>
      <CardActions disableSpacing>
        <Button>
        View Site
        </Button>
 
        <Button>
        View Code
        </Button>
  
        </CardActions>
      </CardContent>
    </Card>
   </div>
  );
}

export default Projects 