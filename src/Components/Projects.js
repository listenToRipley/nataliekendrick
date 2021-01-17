import React from 'react';
import Typography from '@material-ui/core/Typography'
import PantryPals from './ProjPantryPals'
import CodeSample from './ProjCodeSamples';
import AllProjects from './AllProjects';

const Projects = () => {

  return (
   <div>
   <Typography className='projectTitle' variant='h4'>Portfolio</Typography>
    <div className="projectBody">
      <PantryPals/>
      <AllProjects/>
    </div>
    <div className="projectAdds">
    <CodeSample/>
    </div>
   </div>
  );
}

export default Projects 