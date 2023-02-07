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
        <div>
            <div className='text-2xl mr-4 underline'>Certificates</div>

            {certificates.map((item: Certification, index:number): JSX.Element => {
                return (
                    <div key={index}>
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