import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';
//pictures
import actionRel1 from './projectImgs/pantryPalPlanning/actionRel1.jpg';
import actionRel2 from './projectImgs/pantryPalPlanning/actionRel2.jpg';
import actionRel3 from './projectImgs/pantryPalPlanning/actionRel3.jpg';
import actionRel4 from './projectImgs/pantryPalPlanning/actionRel4.jpg';
import actionRel5 from './projectImgs/pantryPalPlanning/actionRel5.jpg';
import actionVerbs from './projectImgs/pantryPalPlanning/actionVerbs.jpg';
import actors from './projectImgs/pantryPalPlanning/actorsAndActions.jpg';
import appMap from './projectImgs/pantryPalPlanning/appMap.png';
import appUse1 from './projectImgs/pantryPalPlanning/appUse1.jpg';
import appUse2 from './projectImgs/pantryPalPlanning/appUse2.jpg';
import backEndQ1 from './projectImgs/pantryPalPlanning/backendQ1.jpg';
import backEndQ2 from './projectImgs/pantryPalPlanning/backendQ2.jpg';
import behavior from './projectImgs/pantryPalPlanning/behavior.jpg';
import concept1 from './projectImgs/pantryPalPlanning/concept1.jpg';
import concept2 from './projectImgs/pantryPalPlanning/concept2.jpg';
import conceptModules from from './projectImgs/pantryPalPlanning/conceptModules.jpg';
import crc1 from './projectImgs/pantryPalPlanning/crc1.jpg';
import crc2 from './projectImgs/pantryPalPlanning/crc2.jpg';
import crc3 from './projectImgs/pantryPalPlanning/crc3.jpg';
import crc4 from './projectImgs/pantryPalPlanning/crc4.jpg';
import crc5 from './projectImgs/pantryPalPlanning/crc5.jpg';
import crc6 from './projectImgs/pantryPalPlanning/crc6.jpg';
import crc7 from './projectImgs/pantryPalPlanning/crc7.jpg';
import crc8 from './projectImgs/pantryPalPlanning/crc8.jpg';
import crc9 from './projectImgs/pantryPalPlanning/crc9.jpg';
import crc10 from './projectImgs/pantryPalPlanning/crc10.jpg';
import eer1 from './projectImgs/pantryPalPlanning/eer1.png';
import eer2 from './projectImgs/pantryPalPlanning/eer2.png';

import './Components.css';


const PantryPalPlanning = () => {

  let img = [ 
    {
      name: 'EER 1',
      description: 'first sql relationship diagram',
      image: eer1
    },
    {
      name: 'EER 2',
      description: 'second sql relationship diagram',
      image: eer2
    }
  ]

  return (
    <div className='planning'>
      <Paper className='planningPaper'>
      <div className='planningTitle'>
      <Typography >Pantry Pals Planning</Typography>
      </div>
       <Carousel className='carousel' showArrows={true} >
       {
                img.map( (item, i) => <img className='planImg' key={i} des={item.description} src={item.image} /> )
            }
        </Carousel>
        <a href="https://docs.google.com/presentation/d/19xS8029_NRw05XWOCFp0lhlehDhmF07N_eE1Eif6Lfg/edit?usp=sharing">Original Concept</a>
      </Paper>
    </div>
  )
}

export default PantryPalPlanning