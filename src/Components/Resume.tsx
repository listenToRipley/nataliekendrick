import React from 'react'; 
import ResumeExperience from './ResumeExp';
import ResumeContacts from './ResumeContacts';
import ResumeSkills from './ResumeSkills';

const Resume = (): JSX.Element => {

  return (
    <div>
      <div className='header'>
        <h1>Natalie Kendrick</h1>
        <p className='title'>Software Developer</p>
      </div>
      <div className='mission'>
        <h2>Mission</h2>
        <p>After working in various fields, I have developed a comprehensive knowledge of business practices. This means I understand the importance of leveraging these skills to provide sustainable and meaningful practices that create innovative, efficient, and effective products to support all parties. </p>
      </div>
      <div>
        <ResumeExperience/>
      </div>
      <div>
        <ResumeSkills/>
      </div>
      <div>
        <ResumeContacts/>
      </div>
      <div>
        <h3>References</h3>
        <p className='references'>References available upon <a href='https://docs.google.com/spreadsheets/d/1xOWVDYFLIk4DrofA3K6GosPREidyfyjn-aBjJGK02M4/edit?usp=sharing'>request</a></p>
      </div>

    </div>
  )

}; 

export default Resume;