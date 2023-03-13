import React from "react";
import certs from "../assets/history/certifications.json"
import { Certification } from "../../Modules/certification";

const Certifications = ():JSX.Element => {

    const certificates: Certification[] = certs.certifications

    return (
        <div className="bg-white/20 transition-colors p-4 justify-center mt-10">
            <div className="text-2xl mr-4 underline">Certificates</div>

            {certificates.map((item: Certification, index:number): JSX.Element => {
                return (
                    <div key={index} className="flex ml-4 has-tooltip">
                        <div className="pb-2">
                            <span  className="tooltip shadow-lg p-2 -mt-10 ml-10 duration-300 bg-sky-900 rounded-lg text-sky-500 ease-in-out">
                                See certificate
                            </span>
                        </div>
                        <div>
                            <a 
                                href={item.link}
                                hrefLang={item.from}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-teal-200 underline"
                                >
                                    {item.type}</a> 
                                    <span> from</span>
                                    <span> {item.from}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Certifications