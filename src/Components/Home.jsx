import React, {useEffect, useState} from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

export default function Home() {
  const [links, setLinks] = useState(undefined);

  const linkedin = <svg className="max-w-xs" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.50143 6.90595C2.37528 5.7193 3.24155 3.95978 5.14733 4.0007C7.05312 4.04162 7.61619 6.12849 6.83655 7.68341C6.21284 8.92734 4.35326 9.34744 3.50143 9.402V20H9.17547V8.95189H12.9004V10.7523C15.4993 7.68341 21 8.62454 21 13.0029V20H17.1019V14.5169C17.1019 12.0208 15.9757 11.5093 14.698 12.0208C13.4202 12.5323 12.9004 13.453 12.9004 15.3352C12.9004 17.5612 12.9004 19.3726 12.9004 20" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/></svg>

  useEffect(() => {

    let listLinks = socialLinks.map((item, index) => {
      console.log(item.link)
      return (
        <a key={index} href={item.link} hrefLang={item.title}>
          {item.title}
          <br/>
          {item.title === "linkedIn" ? linkedin : item.icon}
        </a>
      );
    }, [socialLinks]);

    setLinks(listLinks)
  
  }, [])
  

  return (
    <div className="item-center ml-auto pl-6">
    <h1 id="homeName" className="text-yellow-500 text-5xl justify-center">Natalie Kendrick</h1>
    <h3>Software Developer</h3>
    <div className="flex">
      {links ? [...links] : <br/>}
    </div>
  </div>
  )
  
};
