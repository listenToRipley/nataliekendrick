import React from 'react'; 
import SocialLinks from './SocialLinks';
import jelly from "../assets/images/jelly.png"

export default function Home() {

  return (
    <div className='bg-cover bg-center bg-fixed h-screen min-h-screen object-cover'>
      <div className="justify-center ml-auto pl-6 pt-5  w-full h-full">
        <div id="homeName" className="text-yellow-500 justify-center">
          <div className="text-5xl">Natalie Kendrick</div>
          <div className="text-4xl">Software Developer</div>
        </div>
        <SocialLinks/>
        <div id="tab" className="w-full flex py-2 justify-center"></div>
      </div>
    </div>
  )
  
};
