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
                    <div key={index} className="flex ml-4">
                        <div>
                            <a href={item.link}>{item.type}</a><span> from</span><span> {item.from}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Certifications