import React from 'react';
import SocialLinks from './SocialLinks';

const ResumeContacts = (): JSX.Element =>  {

  const phone: number = 5204043721;
  const countryCode: number = 1; 

  return (
    <div className='mt-4'>
      <div className=''>
        <SocialLinks />
      </div>
      <p> {countryCode} + {phone}</p>
    </div>
  )
};

export default ResumeContacts;