import React, {useEffect, useState} from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

export default function Home() {
  const [links, setLinks] = useState(undefined);

  const linkedin = <svg className="max-w-xs" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/></svg>

  useEffect(() => {

    let listLinks = socialLinks.map((item, index) => {
      console.log(item.link)
      return (
        <a key={index} href={item.link} hrefLang={item.title}>
          {item.title}
          <br/>
          <svg className="max-w-xs" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={item.icon.path.d} stroke={item.icon.path.stroke} stroke-linecap={item.icon.path.strokeLinecap} stroke-Linejoin={item.icon.path.strokeLinejoin} ></path></svg> 
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
