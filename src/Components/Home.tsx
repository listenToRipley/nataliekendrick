import React from "react"; 
import SocialLinks from "./SocialLinks";

export default function Home() {

  return (
    <div className="bg-cover bg-center bg-fixed h-screen min-h-screen object-cover">
      <div className="justify-center ml-auto pl-6 pt-5 mt-2 w-full h-full">
        <div id="name" className="text-sky-800 drop-shadow-20xl justify-center">
          <div className="text-5xl md:text-8xl">Natalie Kendrick</div>
          <div className="text-4xl mt-4 md:text-6xl">Software Developer</div>
        </div>
        <div id="tab" className="w-full flex py-2 justify-center">
          <SocialLinks/>
        </div>
      </div>
    </div>
  )
  
};
