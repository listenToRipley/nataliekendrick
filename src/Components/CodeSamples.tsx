import React from "react";
import caesarCipherWKey from "../../src/Samples/caesar";
import maxStockProfit from "../../src/Samples/maxStockProfit";
import sieveOfEratosthenes from "../../src/Samples/sieveOfEratstenes";
import { Sample } from "../../Modules/samples";
import codeSamples from "../assets/history/codeSamples.json";

const CodeSamples = (): JSX.Element => { 

  const samples: Sample[] = codeSamples.sample;

  let codePath = (title:string):any => {
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
          samples.map((el:Sample, index:number) => {

            return (
              <div key={index} className="bg-black/80 text-gray-400 transition-colors p-4 justify-center mt-10 ">
                <p className="text-xl">{el.title}</p>
                <p><span className='italic'>Description</span>: {el.description}</p>
                <p><span className='italic'>Language:</span> {el.language}</p>
                <br />
                <div className="block break-words">
                  <pre className="font-sans">
                    <samp className="language-js">
                      {`${codePath(el.code)}`}
                    </samp>
                  </pre>
                </div>
              </div>
            )
          })
      }
    </div>
  )
};

export default CodeSamples