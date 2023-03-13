import React from "react";
import certs from "../assets/history/certifications.json"
import { Certification } from "../../Modules/certification";


const Certifications = ():JSX.Element => {

    const certificates: Certification[] = certs.certifications

    const initLinks: any = {
        "LinkedIn Learning": "https://www.linkedin.com/learning/?trk=nav_neptune_learning&",
        "Udemy": "https://www.udemy.com/",
        "Zenva": "https://academy.zenva.com/"
    }

    return (
        <div className="bg-white/20 transition-colors p-4 justify-center mt-10">
            <div className="text-2xl mr-4 underline">Certificates</div>

            {certificates.map((item: Certification, index:number): JSX.Element => {
                let company: string = item.from in initLinks ? initLinks[item.from] : ''
                return (
                    <div key={index} className="flex ml-4 ">
                        <div className="pb-2 has-tooltip">
                            <span  className="tooltip shadow-lg p-2 -mt-10 ml-10 duration-50 bg-sky-900 rounded-lg text-sky-500 ease-in-out">
                                See certificate
                            </span>
                                                        <a 
                                href={item.link}
                                hrefLang={item.from}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline hover:underline hover:text-teal-200 underline"
                                >
                                    {item.type}</a> 
                        </div>
                        <span className="pl-2"> from </span>
                        <div>

                            <a
                                href={company}
                                className="no-underline hover:underline hover:text-teal-200 underline p-2"
                            > {item.from}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Certifications