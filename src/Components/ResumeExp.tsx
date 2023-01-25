import React from 'react'; 
import workHistory from '../info/history/workHistory.json'

const ResumeExperience = (): JSX.Element => {

  interface Professional {
    "company": {
      "name": string
      "site": string 
      "type": string
      "location": string
      },
    "title": string
    "tenure": {
      "start": string
      "end": string
    },
    "divider": string 
    "responsibilities": string[]
  };

  interface PartTime {
    "company": {
      "name": string
      "site": string | undefined
      "type": string
      "location": string
      },
    "title": string
    "tenure": {
      "start": number
      "end": number
    },
    "responsibilities": string[]
  };

  interface Volunteer {
      "company": {
        "name": string,
        "site": string, 
        "location": string,
        "description": string
      },
      "title": string,
      "tenure": {
        "start": number,
        "end":  number
      }
  }

  const prof: Professional[] = workHistory[0].professional;
  const partTime: PartTime[] = workHistory[0].partTime;
  const volunteer: Volunteer[] = workHistory[0].volunteer;

  return(
      <div>

      <div className='professional'>
        <h3>Professional Experience</h3>
        {
          prof.map((el: any, id:number) => {

              return (
                <div key={id}>
                  <p className='jobTitle'>{el.title}</p>
                  <p className='companyLink'><a href={el.company.site}>{el.company.name}</a></p>
                  <p>{el.tenure.start} {el.tenure.end ? <span>- {el.tenure.end}</span>: ""}</p>
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

      <div>
        <h4>Part Time Experience</h4>

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

    <div>
      Volunteer work
      
      {
          volunteer.map((el: any, id:number) => {
            console.log(el)
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