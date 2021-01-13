import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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
import conceptModules from './projectImgs/pantryPalPlanning/conceptModules.jpg';
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
import debug from './projectImgs/pantryPalPlanning/debugRoute.jpg';
import eer1 from './projectImgs/pantryPalPlanning/eer1.png';
import eer2 from './projectImgs/pantryPalPlanning/eer2.png';
import eer3 from './projectImgs/pantryPalPlanning/eer3.png';
import eerFinal from './projectImgs/pantryPalPlanning/eerFinal.png';
import note from './projectImgs/pantryPalPlanning/note1.jpg';
import pageLayout1 from './projectImgs/pantryPalPlanning/pageLayout1.jpg';
import pageLayout2 from './projectImgs/pantryPalPlanning/pageLayout2.jpg';
import pageLayout3 from './projectImgs/pantryPalPlanning/pageLayout3.jpg';
import pageLayout4 from './projectImgs/pantryPalPlanning/pageLayout4.jpg';
import pageLayout5 from './projectImgs/pantryPalPlanning/pageLayout5.jpg';
import pageLayout6 from './projectImgs/pantryPalPlanning/pageLayout6.jpg';
import pageLayout7 from './projectImgs/pantryPalPlanning/pageLayout7.jpg';
import pageLayout8 from './projectImgs/pantryPalPlanning/pageLayout8.jpg';
import pageReqs1 from './projectImgs/pantryPalPlanning/pageReqs1.jpg';
import pageReqs2 from './projectImgs/pantryPalPlanning/pageReqs2.jpg';
import pageReqs3 from './projectImgs/pantryPalPlanning/pageReqs3.jpg';
import pageReqs4 from './projectImgs/pantryPalPlanning/pageReqs4.jpg';
import pageReqs5 from './projectImgs/pantryPalPlanning/pageReqs5.jpg';
import pageReqs6 from './projectImgs/pantryPalPlanning/pageReqs6.jpg';
import pageReqs7 from './projectImgs/pantryPalPlanning/pageReqs7.jpg';
import pageReqs8 from './projectImgs/pantryPalPlanning/pageReqs8.jpg';
import pathMap from './projectImgs/pantryPalPlanning/pathMap.jpg';
import relDep from './projectImgs/pantryPalPlanning/relationDependency.jpg';
import relMap from './projectImgs/pantryPalPlanning/relationshipMap.jpg';
import routing from './projectImgs/pantryPalPlanning/routing1.jpg';
import sqlNameCon from './projectImgs/pantryPalPlanning/sqlNamingCon.jpg';
import sqlPlan1 from './projectImgs/pantryPalPlanning/sqlPlanning1.jpg';
import sqlPlan2 from './projectImgs/pantryPalPlanning/sqlPlanning2.jpg';
import sqlPlan3 from './projectImgs/pantryPalPlanning/sqlPlanning3.jpg';
import sqlPlan4 from './projectImgs/pantryPalPlanning/sqlPlanning4.jpg';
import sqlPlan5 from './projectImgs/pantryPalPlanning/sqlPlanning5.jpg';
import sqlPlan6 from './projectImgs/pantryPalPlanning/sqlPlanning6.jpg';
import sqlPlan7 from './projectImgs/pantryPalPlanning/sqlPlanning7.jpg';
import sqlPlan8 from './projectImgs/pantryPalPlanning/sqlPlanning8.jpg';
import sqlPlan9 from './projectImgs/pantryPalPlanning/sqlPlanning9.jpg';
import sqlPlan10 from './projectImgs/pantryPalPlanning/sqlPlanning10.jpg';
import sqlQuery1 from './projectImgs/pantryPalPlanning/sqlQuery1.jpg';
import sqlQuery2 from './projectImgs/pantryPalPlanning/sqlQuery2.jpg';
import sqlQuery3 from './projectImgs/pantryPalPlanning/sqlQuery3.jpg';
import sqlQuery4 from './projectImgs/pantryPalPlanning/sqlQuery4.jpg';
import sqlQuery5 from './projectImgs/pantryPalPlanning/sqlQuery5.jpg';
import sqlQuery6 from './projectImgs/pantryPalPlanning/sqlQuery6.jpg';
import sqlQuery7 from './projectImgs/pantryPalPlanning/sqlQuery7.jpg';
import sqlQuery8 from './projectImgs/pantryPalPlanning/sqlQuery8.jpg';
import sqlQuery9 from './projectImgs/pantryPalPlanning/sqlQuery9.jpg';
import sqlQuery10 from './projectImgs/pantryPalPlanning/sqlQuery10.jpg';
import sqlQuery11 from './projectImgs/pantryPalPlanning/sqlQuery11.jpg';
import sqlRel from './projectImgs/pantryPalPlanning/sqlRels.jpg';
import sqlRoute1 from './projectImgs/pantryPalPlanning/sqlRoute1.jpg';
import sqlRoute2 from './projectImgs/pantryPalPlanning/sqlRoute2.jpg';
import sqlRoute3 from './projectImgs/pantryPalPlanning/sqlRoute3.jpg';
import sqlRoute4 from './projectImgs/pantryPalPlanning/sqlRoute4.jpg';
import sqlRoute5 from './projectImgs/pantryPalPlanning/sqlRoute5.jpg';
import sqlRoute6 from './projectImgs/pantryPalPlanning/sqlRoute6.jpg';
import sqlRouteTesting1 from './projectImgs/pantryPalPlanning/sqlRouteTesting1.jpg';
import sqlRouteTesting2 from './projectImgs/pantryPalPlanning/sqlRouteTesting2.jpg';
import sqlTableRel from './projectImgs/pantryPalPlanning/sqlTableRels.jpg';
import sqlTablePlan from './projectImgs/pantryPalPlanning/sqlTablesPlan.jpg';
import useCase1 from './projectImgs/pantryPalPlanning/useCase1.jpg';
import useCase2 from './projectImgs/pantryPalPlanning/useCase2.jpg';
import useCase3 from './projectImgs/pantryPalPlanning/useCase3.jpg';
import useCase4 from './projectImgs/pantryPalPlanning/useCase4.jpg';
import useCase5 from './projectImgs/pantryPalPlanning/useCase5.jpg';
import useCase6 from './projectImgs/pantryPalPlanning/useCase6.jpg';
import useCase7 from './projectImgs/pantryPalPlanning/useCase7.jpg';
import useCase8 from './projectImgs/pantryPalPlanning/useCase8.jpg';
import useCase9 from './projectImgs/pantryPalPlanning/useCase9.jpg';
import useCase10 from './projectImgs/pantryPalPlanning/useCase10.jpg';
import useCase11 from './projectImgs/pantryPalPlanning/useCase11.jpg';
import useCase12 from './projectImgs/pantryPalPlanning/useCase12.jpg';
import useCase13 from './projectImgs/pantryPalPlanning/useCase13.jpg';
import useCase14 from './projectImgs/pantryPalPlanning/useCase14.jpg';
import useCase15 from './projectImgs/pantryPalPlanning/useCase15.jpg';
import useCase16 from './projectImgs/pantryPalPlanning/useCase16.jpg';
import useCase17 from './projectImgs/pantryPalPlanning/useCase17.jpg';

import './Components.css';


const PantryPalPlanning = () => {

  let img = [ 
    {
      name: 'page lay out 1',
      description: 'page lay out',
      image: pageLayout1
    },
    {
      name: 'page lay out 2',
      description: 'page lay out',
      image: pageLayout2
    },
    {
      name: 'page lay out 3',
      description: 'page lay out',
      image: pageLayout3
    },
    {
      name: 'page lay out 4',
      description: 'page lay out',
      image: pageLayout4
    },
    {
      name: 'page lay out 5',
      description: 'page lay out',
      image: pageLayout5
    },
    {
      name: 'page lay out 6',
      description: 'page lay out',
      image: pageLayout6
    },
    {
      name: 'page lay out 7',
      description: 'page lay out',
      image: pageLayout7
    },
    {
      name: 'page lay out 8',
      description: 'page lay out',
      image: pageLayout8
    },
    {
      name: 'use case 1',
      description: 'use cases',
      image: useCase1
    },
    {
      name: 'use case 2',
      description: 'use cases',
      image: useCase2
    },
    {
      name: 'use case 3',
      description: 'use cases',
      image: useCase1
    },
    {
      name: 'use case 3',
      description: 'use cases',
      image: useCase3
    },
    {
      name: 'use case 4',
      description: 'use cases',
      image: useCase4
    },
    {
      name: 'use case 5',
      description: 'use cases',
      image: useCase5
    },
    {
      name: 'use case 6',
      description: 'use cases',
      image: useCase6
    },
    {
      name: 'use case 7',
      description: 'use cases',
      image: useCase7
    },
    {
      name: 'use case 8',
      description: 'use cases',
      image: useCase8
    },
    {
      name: 'use case 9',
      description: 'use cases',
      image: useCase9
    },
    {
      name: 'use case 10',
      description: 'use cases',
      image: useCase10
    },
    {
      name: 'use case 11',
      description: 'use cases',
      image: useCase11
    },
    {
      name: 'use case 12',
      description: 'use cases',
      image: useCase12
    },
    {
      name: 'use case 13',
      description: 'use cases',
      image: useCase13
    },
    {
      name: 'use case 14',
      description: 'use cases',
      image: useCase14
    },
    {
      name: 'use case 15',
      description: 'use cases',
      image: useCase15
    },
    {
      name: 'use case 16',
      description: 'use cases',
      image: useCase16
    },
    {
      name: 'use case 17',
      description: 'use cases',
      image: useCase17
    },
    {
      name: 'EER 1',
      description: 'first sql relationship diagram',
      image: eer1
    },
    {
      name: 'EER 2',
      description: 'second sql relationship diagram',
      image: eer2
    },
    {
      name: 'final eer',
      description: 'final sql relationship diagram',
      image: eerFinal
    }
  ]

  //look into how to update timing. 
  return (
    <div className='planning'>
      <Paper className='planningPaper'>
      <div className='planningTitle'>
      <Typography >Pantry Pals Planning</Typography>
      </div>
        <Card className='carousel' variant='outlined' raised='true'>
        <Carousel showArrows={true} >
       {
                img.map( (item, i) => <img className='planImg' key={i} des={item.description} src={item.image} /> )
            }
        </Carousel>
        </Card>
        <a href="https://docs.google.com/presentation/d/19xS8029_NRw05XWOCFp0lhlehDhmF07N_eE1Eif6Lfg/edit?usp=sharing">Original Concept</a>
      </Paper>
    </div>
  )
}

export default PantryPalPlanning