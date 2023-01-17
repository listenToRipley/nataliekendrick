import React from "react";
import caesarCipherWKey from "./Samples/caesar";
import maxstockprofit from "./Samples/maxStockProfit";
import sieveoferatstense from "./Samples/sieveOfEratstenes";

const CodeSamples = (): JSX.Element => { 

  const caesar: any = caesarCipherWKey 
  const msp: any = maxstockprofit;
  const soe: any = sieveoferatstense; 


  const samples = [
    {
      "title": "Caesar Cipher",
      "description": "Caesar Cipher; shifts the given message letters by a specified number of characters which is passed in.",
      "language": "javascript",
      "code": caesar
    },
    {
      "title": "Max Stock Provide",
      "description": "Takes in an array of prices and returns the max possible profit for the day.  In other words, find the lowest point and the highest point. Subtract the value from the highest to the lowest and return that value. ",
      "language": "javascript",
      "code": msp
    },
    {
      "title": "Sieve Of Eratosthenes",
      "description": "Find all the prime numbers up to a given number.",
      "language": "javascript",
      "code": soe
    }
  ];


  return (
    <div>
      `${
          samples.map((el) => {
            return (
              <div>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p><span>Language:</span> {el.language}</p>
                <pre className="prettyprinted">
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