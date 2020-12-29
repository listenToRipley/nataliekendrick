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
import addressBook from './projectImgs/addressBook.png'
import './Components.css'

const AddressBook = () => {

  return (

<Card className='cardBody'>
  <CardHeader
    title="Sample Address Book"
    subheader="March 2020"
  />
  <CardMedia
    className='cardMedia'
    image={addressBook}
    title="example address book"
  />
  <CardContent>
  <Typography paragraph>
    Using <a href="https://randomuser.me/">random user generate</a> API to create a sample address book
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
    <Button onClick={() => window.open('https://listentoripley.github.io/javascript-workbook/07week/addressBook.html')}>
    View Site
    </Button>

    <Button onClick={()=> window.open('https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/07week')}>
    View Code
    </Button>

    </CardActions>
  </CardContent>
</Card>

  );
}

export default AddressBook