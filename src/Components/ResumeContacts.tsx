import React from 'react';
import socialLinks from '../info/history/socialLinks.json';
// TODO: 
// 1. Update Icons.

const ResumeContacts = (): JSX.Element => {
  const phone: number = 5204043721;
  const countryCode: number = 1; 

  return (
    <div>
      <div>
        {
          socialLinks.map((el: any, key:number) => {
  
              return (
                <div key={key}>
                  <a href={el.link}>{el.title}</a>
                  <span>{el.icon}</span>
                </div>
              )
            
          }) 
        }
      </div>
      <p> {countryCode} + {phone}</p>
    </div>
  )
};

export default ResumeContacts