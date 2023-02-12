import React from "react"; 
import SocialLinks from "./SocialLinks";

export default function Home() {

  return (
    <div className="bg-cover bg-center bg-fixed h-screen min-h-screen object-cover">
      <div className="justify-center ml-auto pl-6 pt-5  w-full h-full">
        <div id="name" className="text-lime-300 drop-shadow-2xl justify-center">
          <div className="text-5xl">Natalie Kendrick</div>
          <div className="text-4xl">Software Developer</div>
        </div>
        <div id="tab" className="w-full flex py-2 justify-center">
          <SocialLinks/>
        </div>
      </div>
    </div>
  )
  
};
