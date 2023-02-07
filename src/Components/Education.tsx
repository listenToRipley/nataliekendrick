import React from "react";
import edu from "../info/history/edu.json"
import aca from "../assets/images/projectImgs/acaBadge.png";
import pima from "../assets/images/projectImgs/pima.png"

const Education = (): JSX.Element => {

    // TODO:add links for institions

    interface Education         {
        "institution": string,
        "degree": string,
        "attended": {
            "start": string,
            "end": string
            }
        }

    
    const educationHist: Education[] = edu.education

    return (
        <div className="mt-2">
            <div className='text-2xl mr-4 underline'>Education</div>
            {
                educationHist.map((edu: Education, index: number)=> {

                    const logoText = `${edu.institution} logo`

                    return(
                        <div key={index} className="mb-4">
                            <div className="h-10 w-10 rounded-full">
                                <img src={edu.institution === "Pima Community College" ?  pima: aca} alt={logoText}/>
                            </div>
                            <div>{edu.institution}</div>
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