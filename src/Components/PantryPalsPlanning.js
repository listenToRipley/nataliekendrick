import React from 'react';
import Paper from '@material-ui/core/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Components.css';

const PantryPalPlanning = () => {

  return (
    <div className='planning'>
      <Paper className='planningPaper'>
      Pantry Pals Planning
       <Carousel>
          <div>
            <img src="./projectImgs/pantryPalPlanning/eer1.png" />
            <p className="legend">Original EER</p>
          </div>

          <div>
            <img src="./projectImgs/pantryPalPlanning/eer2.png" />
            <p className="legend">Second EER</p>
          </div>

          <div>
            <img src="./projectImgs/pantryPalPlanning/eer3.png" />
            <p className="legend">Third EER</p>
          </div>

          <div>
            <img src="./projectImgs/pantryPalPlanning/eerFinal.png" />
            <p className="legend">Final EER</p>
          </div>
        </Carousel>
        <a href="https://docs.google.com/presentation/d/19xS8029_NRw05XWOCFp0lhlehDhmF07N_eE1Eif6Lfg/edit?usp=sharing">Original Concept</a>
      </Paper>
    </div>
  )
}

export default PantryPalPlanning