import React from "react";
import caesarCipherWKey from "../../src/Samples/caesar";
import maxStockProfit from "../../src/Samples/maxStockProfit";
import sieveOfEratosthenes from "../../src/Samples/sieveOfEratstenes";
import { Sample } from "../../Modules/samples";
import codeSamples from "../assets/history/codeSamples.json";

const CodeSamples = (): JSX.Element => { 

  const samples: Sample[] = codeSamples.sample;

  let codePath = (title: string): any => {
    let code: any = ""

    switch(title) {
      case "sieveOfEratosthenes":
        return code = sieveOfEratosthenes;
      case "maxStockProfit": 
        return code = maxStockProfit;
      case "caesarCipherWKey":
        return code = caesarCipherWKey;
      default:
        console.log("What sample code are you trying to import?")
    }

    return code;
  }


  return (
    <div>
      {
        samples.map((el: Sample, index: number) => {

          return (
            <div key={index} className="bg-black/80 text-gray-400 transition-colors p-4 pb-8 mt-10 mb-14 sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 sm:pr-4 md:pr-4 lg:pr-4 xl:pr-4 sm:pb-4 md:pb-0 lg:pb-0 xl:pb-0">
                <p className="text-xl">{el.title}</p>
                <p><span className='italic'>Description</span>: {el.description}</p>
                <p><span className='italic'>Language:</span> {el.language}</p>
              </div>
              <br/>
              <div className="sm:w-1/2 md:w-1/3 lg:w-2/3 xl:w-2/3">
                <div className="block">
                  <pre className="font-sans">
                    <samp className="language-js break-normal">
                      {`${codePath(el.code)}`}
                    </samp>
                  </pre>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default CodeSamples;
