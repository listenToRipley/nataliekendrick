import React, {useEffect, useState} from "react"; 
import socialLinks from "../info/history/socialLinks.json";

const SocialLinks = (): JSX.Element =>  {
    interface SL {
        "title": string,
        "link": string, 
        "icon": {
            "path": {
                "d": string
            }
        }
    };

    const [links, setLinks]: any = useState< void | JSX.Element[]>(undefined);
    useEffect(() => {

    let listLinks = socialLinks.map((item: SL, index:number): JSX.Element => {
        return (
        <a 
            key={index} 
            href={item.link} 
            hrefLang={item.title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg className="h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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