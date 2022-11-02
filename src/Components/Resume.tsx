import React from 'react'; 
import ResumeExperience from './ResumeExp';

const Resume = () => {

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
      <div>Skills</div>
      <div>Contacts</div>
      <div>References</div>
    </div>
  )

}; 

export default Resume;