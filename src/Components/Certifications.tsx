import React from "react";
import certs from "../info/history/certifications.json"

const Certifications = ():JSX.Element => {

//  optional todo: added links to certifications

    interface Certification {
        "type": string,
        "from": string
    }

    const certificates: Certification[] = certs.certifications

    return (
        <div className="bg-white/20 transition-colors p-4 justify-center mt-10">
            <div className="text-2xl mr-4 underline">Certificates</div>

            {certificates.map((item: Certification, index:number): JSX.Element => {
                return (
                    <div key={index} className="flex">
                        <div>
                            <span>{item.type}</span><span> from</span><span> {item.from}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Certifications