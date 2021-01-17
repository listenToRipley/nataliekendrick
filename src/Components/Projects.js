import React from 'react';
import Typography from '@material-ui/core/Typography'
import AddressBook from './ProjAddressBook'
import DodgeBall from './ProjDodgeBall';
import PigLatin from './ProjPigLatin'
import SmallBusiness from './ProjSmallBusiness';
import PantryPals from './ProjPantryPals'
import CodeSample from './ProjCodeSamples';
import AllProjects from './AllProjects';

const Projects = () => {

  return (
   <div>
   <Typography className='projectTitle' variant='h4'>Portfolio</Typography>
    <div className="projectBody">
      <PantryPals/>
      <SmallBusiness/>
      <AddressBook/>
      <DodgeBall/>
      <PigLatin/>
      <AllProjects/>
    </div>
    <div className="projectAdds">
    <CodeSample/>
    </div>
   </div>
  );
}

export default Projects 