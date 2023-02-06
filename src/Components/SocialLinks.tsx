import React, {useEffect, useState} from 'react'; 
import socialLinks from "../info/history/socialLinks.json"

const SocialLinks = (): JSX.Element =>  {

    const [links, setLinks]: any = useState< void | JSX.Element[]>(undefined);
    useEffect(() => {

    let listLinks = socialLinks.map((item, index) => {
        return (
        <a 
        key={index} 
        href={item.link} 
        hrefLang={item.title}
        className="my-auto ml-auto block cursor-pointer pr-4"
        >
            <svg className="h-20 w-40 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={item.icon.path.d} stroke="#000" strokeLinecap="round" strokeLinejoin="round"> </path>
            </svg> 
        </a>
        );
    }, [socialLinks]);

    setLinks(listLinks)
    
    }, [])

    return (
        <div>
            {links ? [...links] : <br/>}
        </div>
    )
};

export default SocialLinks