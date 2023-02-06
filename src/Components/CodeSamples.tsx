import React from "react";
import caesarCipherWKey from "../../src/Samples/caesar";
import maxStockProfit from "../../src/Samples/maxStockProfit";
import sieveOfEratosthenes from "../../src/Samples/sieveOfEratstenes";

const CodeSamples = (): JSX.Element => { 

  const samples = [
    {
      "title": "Caesar Cipher",
      "description": "Caesar Cipher; shifts the given message letters by a specified number of characters which is passed in.",
      "language": "javascript",
      "code": caesarCipherWKey
    },
    {
      "title": "Max Stock Provide",
      "description": "Takes in an array of prices and returns the max possible profit for the day.  In other words, find the lowest point and the highest point. Subtract the value from the highest to the lowest and return that value. ",
      "language": "javascript",
      "code": maxStockProfit
    },
    {
      "title": "Sieve Of Eratosthenes",
      "description": "Find all the prime numbers up to a given number.",
      "language": "javascript",
      "code": sieveOfEratosthenes
    }
  ];


  return (
    <div>
      `${
          samples.map((el) => {
            return (
              <div className="bg-black/80 text-gray-400 transition-colors p-4 justify-center mt-10">
                <p className="text-xl">{el.title}</p>
                <p><span className='italic'>Description</span>: {el.description}</p>
                <p><span className='italic'>Language:</span> {el.language}</p>
                <br />
                <pre className="prettyprinted font-sans">
                  <code className="language-js hljs">
                    {`${el.code}`}
                  </code>
                </pre>
              </div>
            )
          })
      }`
    </div>
  )
};

export default CodeSamples