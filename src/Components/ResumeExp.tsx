import React from 'react'; 
import workHistory from '../info/history/workHistory.json'

const ResumeExperience = () => {

  return(
      <div>

      <div className='professional'>
        <h3>Professional Experience</h3>
        <div className='profItem'>
          <p className='jobTitle'>title</p>
          <p className='companyLink'><a href=''>company</a></p>
          <div className='jobDuties'>
            <p>Responsibilities</p>
          </div>
        </div>
      </div>

      <div>
        <h4>Part Time Experience</h4>
        <div className='ptItem'>
          <div className='ptItem'>
            <p className='jobTitle'>title</p>
            <p className='companyLink'><a href=''>company</a></p>
            <div className='jobDuties'>
              <p>Responsibilities</p>
            </div>
          </div>
        </div>
      </div>

    <div>
      Volunteer work
      <p><a href=''>Group Name</a></p>
      <p>Volunteer Title</p>
    </div>

  </div>
  )

};

export default ResumeExperience; 