import React from "react";
import SocialLinks from "./SocialLinks";

const ResumeContacts = (): JSX.Element =>  {

  const phone: number = 5204043721;
  const countryCode: number = 1; 
  const location: string = "Rochester, NY, USA"

  return (
    <div className="bg-white/20 transition-colors p-4 justify-center mt-4 mb-4">
      <div>
        <p className="mb-4"> {countryCode}+ {phone}</p>
        <p className="mb-4">{location}</p>
      </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  )
};

export default ResumeContacts;