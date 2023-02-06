import React, {useEffect, useState} from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

export default function Home() {
  const [links, setLinks] = useState(undefined);

  useEffect(() => {

    let listLinks = socialLinks.map((item, index) => {
      console.log(item.link)
      return (
        <a key={index} href={item.link} hrefLang={item.title}>
          {item.title}
          <br/>
          {item.icon}
        </a>
      );
    }, [socialLinks]);

    setLinks(listLinks)
  
  }, [])
  

  return (
    <div className="item-center ml-auto pl-6">
    <h1 id="homeName" className="text-yellow-500 text-5xl justify-center">Natalie Kendrick</h1>
    <h3>Software Developer</h3>
    <div>
      {links ? [...links] : <br/>}
    </div>
  </div>
  )
  
};
