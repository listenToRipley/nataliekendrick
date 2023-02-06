import React from 'react'; 
import workHistory from '../info/history/workHistory.json';
import { Professional, PartTime, Volunteer } from '../../Modules/work';

const ResumeExperience = (): JSX.Element => {

  const prof: Professional[] = workHistory[0].professional;
  const partTime: PartTime[] = workHistory[0].partTime;
  const volunteer: Volunteer[] = workHistory[0].volunteer;

  return(
      <div className='bg-white/20 transition-colors p-4 justify-center mt-10'>

      <div className='mt-4'>
        <h3 className='mt-2 mb-3 text-2xl'>Professional Experience</h3>
        {
          prof.map((el: any, id:number) => {

              return (
                <div key={id} className='mb-12'>
                  <p className='text-xl'>{el.title}</p>
                  <p className='hover:underline hover:text-yellow-500'><a href={el.company.site}>{el.company.name}</a></p>
                  <p className='text-right'>{el.tenure.start} {el.tenure.end ? <span>- {el.tenure.end}</span>: ""}</p>
                  <ul className='pl-2'>
                    <span>Duties:</span>
                    {el.responsibilities.map((item: string): JSX.Element => {
                      return (
                        <li className='pl-2 list-disc'>{item}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })
        }
      </div>

      <div className='mt-4'>
        <h4 className='mt-2 mb-3 text-2xl'>Part Time Experience</h4>

        {
          partTime.map((el: any, id:number) => {

              return (
                <div key={id}>
                  <p className='jobTitle'>{el.title}</p>
                  <p className='companyLink'>{el.company.name}</p>
                  <p>{el.tenure.start} - {el.tenure.end}</p>
                  <ul className='jobDuties'>
                    {el.responsibilities.map((item: string): JSX.Element => {
                      return (
                        <li>{item}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })
        }
      </div>

    <div className='mt-4'>
      <h4 className='mt-2 mb-3 text-2xl'>Volunteer work</h4>
      
      {
          volunteer.map((el: any, id:number) => {
            // console.log(el)
              return (
                <div key={id}>
                  <p className='jobTitle'>{el.title}</p>
                  <p className='companyLink'><a href={el.company.site}>{el.company.name}</a></p>
                  <p>{el.tenure.start} - {el.tenure.end}</p>
                </div>
              )
            })
        }
    </div>

  </div>
  )

};

export default ResumeExperience; 