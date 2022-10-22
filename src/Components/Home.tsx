import React from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

export default function Home(): JSX.Element {

  const linksList = () : React.ComponentState  => {
    socialLinks.forEach((item) => {
      console.log(item.link)
      return (
        <div>
          <a href={item.link} hrefLang={item.title}>
          {item.icon}
          </a>
        </div>
      );
    });
  };

  return <div>
    <h1>Natalie Kendrick</h1>
    <h3>Software Developer</h3>
    <div>
      {linksList()}
    </div>
  </div>
  
};
