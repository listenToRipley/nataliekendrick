import React from "react";
import edu from "../assets/history/edu.json"
import aca from "../assets/images/projectImgs/acaBadge.png";
import pima from "../assets/images/projectImgs/pima.png"
import { EduHistory } from "../../Modules/education";

const Education = (): JSX.Element => {
    
    const educationHist: EduHistory[] = edu.education

    return (
        <div className=" bg-white/20 transition-colors p-4 mt-10 flex">
            <div className="text-2xl mr-4 underline">Education</div>
            {
                educationHist.map((edu: EduHistory, index: number)=> {

                    const logoText = `${edu.institution} logo`

                    return(
                        <div key={index} className="mb-4 mr-4 has-tooltip">
                            <div className="h-10 w-10 rounded-full">
                                <img src={edu.institution === "Pima Community College" ?  pima: aca} alt={logoText}/>
                            </div>
                            <div className="pb-2">
                                <span 
                                    className="tooltip shadow-lg p-2 -mt-10 ml-10 duration-300 bg-gray-500 rounded-lg text-gray-900 ease-in-out">
                                    See {edu.initials}'s site
                                </span>
                                <a
                                    href={edu.link}
                                    hrefLang={edu.institution}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-teal-200 underline"
                                >
                                    {edu.institution}
                                </a>
                            </div>
                            <div>
                                <span>Degree: </span><span>{edu.degree}</span>
                            </div>
                            <div>
                                <span>Attended: </span><span>{edu.attended.start} to {edu.attended.end}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Education