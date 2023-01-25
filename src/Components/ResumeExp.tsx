import React from 'react'; 
import workHistory from '../info/history/workHistory.json'

//TODO: 
// 1. Loop though the workHistory
// 2. if the key includes part time, create an entry for each of those 
// 3. if the key includes volunteer, create an entry for those. 

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

  // const profExp = (workHistory: object[]): any => {
  //   console.log('work history',JSON.stringify(workHistory))
  // }

  const prof: Professional[] = workHistory[0].professional
  // const partTime = workHistory[1].partTime

  // console.log(partTime)

  return(
      <div>

      <div className='professional'>
        <h3>Professional Experience</h3>
        {
          prof.map((el: any, id:number) => {
            console.log(el)
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
                  <a href={el.link}>{el.title}</a>
                  <span>{el.icon}</span>
                </div>
              )
            })
      }
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