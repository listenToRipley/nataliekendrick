import React, {useEffect, useState} from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

export default function Home() {
  const [links, setLinks]: any = useState< void | JSX.Element[]>(undefined);
  useEffect(() => {

    let listLinks = socialLinks.map((item, index) => {
      return (
      <a 
        key={index} 
        href={item.link} 
        hrefLang={item.title}
        className="no-underline"
        >
          <svg className="h-20 w-40 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={item.icon.path.d} stroke="#000" strokeLinecap="round" strokeLinejoin="round"> 
            </path>
          </svg> 
      </a>
      );
    }, [socialLinks]);

    setLinks(listLinks)
  

  }, [])
  

  return (
    <div className="justify-center ml-auto pl-6 pt-5 ">
    <div id="homeName" className="text-yellow-500 justify-center">
      <div className="text-5xl">Natalie Kendrick</div>
      <div className="text-4xl">Software Developer</div>
    </div>
    
    <div id="tab" className="w-full flex py-2 justify-center">
      {links ? [...links] : <br/>}
    </div>
  </div>
  )
  
};
