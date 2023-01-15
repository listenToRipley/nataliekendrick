import React from 'react';
import socialLinks from '../info/history/socialLinks.json';
// TODO: 
// 1. for each social link, create a link with icons

const ResumeContacts = (): JSX.Element => {
  const phone: number = 5204043721;
  const countryCode: number = 1; 


  return (
    <div>
      <a href=''><p>Icon</p><p>title</p></a>
      <p> {countryCode} + {phone}</p>
    </div>
  )
};

export default ResumeContacts