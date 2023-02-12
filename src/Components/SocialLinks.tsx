import React, {useEffect, useState} from "react"; 
import socialLinks from "../assets/history/socialLinks.json";
import { SocialLink } from "../../Modules/socialLink";

const SocialLinks = (): JSX.Element =>  {

    const [links, setLinks]: any = useState< void | JSX.Element[]>(undefined);
    useEffect(() => {

    let listLinks = socialLinks.map((item: SocialLink, index:number): JSX.Element => {
        return (
            <div className="has-tooltip hover:stroke-teal-200 transition duration-200 ease-in-out m-2">
                <span 
                    className="tooltip shadow-lg p-1 mt-6 ml-20 duration-150 bg-sky-700 rounded-lg text-teal-200 ease-in-out">
                    {item.title}
                </span>
                <a 
                    key={index} 
                    href={item.link} 
                    hrefLang={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <svg className="h-20 hover:stroke-sky-500 drop-shadow-2xl hover:bg-sky-900 shadow-cyan-200 aspect-auto rounded-full stroke-teal-200 bg-sky-700 transition duration-150 ease-in-out " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d={item.icon.path.d} 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        > </path>
                </svg> 
                </a>
            </div>
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