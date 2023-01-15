import React from 'react';
import skills from '../info/history/skills.json';

//TODO: 
//1. For each of the skills create a list

const ResumeSkills = (): JSX.Element => {
  console.log(skills)

  return (
    <div>
      <h3>Skills</h3>
      <div>Soft</div>
      <div>Technical</div>
    </div>
  )
};

export default ResumeSkills