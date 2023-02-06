import React from 'react'; 
import SocialLinks from './SocialLinks';

export default function Home() {

  

  return (
    <div className="min-w-[80] md:min-w-[40%] justify-center ml-auto pl-6 pt-5 ">
    <div id="homeName" className="text-yellow-500 justify-center">
      <div className="text-5xl">Natalie Kendrick</div>
      <div className="text-4xl">Software Developer</div>
    </div>
    <SocialLinks/>
    <div id="tab" className="w-full flex py-2 justify-center min-w-[80] md:min-w-[40%]">
    </div>
  </div>
  )
  
};
