import React from 'react';
import skills from '../info/history/skills.json';

const ResumeSkills = (): JSX.Element => {
  
  const soft: string[] = skills.soft.sort((a,b) => {
    if (a<b) {return -1}
    if (a>b) {return 1}
    return 0
  });
  const tech: string[] = skills.technical.sort((a,b) => {
    if (a<b) {return -1}
    if (a>b) {return 1}
    return 0
  });

  return (
    <div className='bg-white/20 transition-colors p-4 justify-center mt-10'>
      <h3>Skills</h3>

      <div>
        <div>Soft</div>
        <ul>
          {soft.map((skill: string, id: number): JSX.Element => {
            return (
              <li key={id}>{skill}</li>
            )
          })
          }
        </ul>
      </div>

      <div>
        <div>Technical</div>
        <ul>
          {tech.map((skill: string): JSX.Element  => {
            return (
              <li>{skill}</li>
            )
          })
          }
        </ul>
      </div>

    </div>
  )
};

export default ResumeSkills