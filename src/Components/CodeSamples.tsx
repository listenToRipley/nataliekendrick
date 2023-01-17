import React from "react";
import caesarCipherWKey from "./Samples/caesar";
import maxstockprofit from "./Samples/maxStockProfit";

const CodeSamples = (): JSX.Element => { 

  const caesar: any = caesarCipherWKey 
  const msp: any = maxstockprofit;

  const samples = [
    {
      "title": "Caesar Cipher",
      "description": "Caesar Cipher with a key to where content will be removed.",
      "language": "javascript",
      "code": caesar
    },
    {
      "title": "Max Stock Provide",
      "description": "Takes in an array of prices and returns the max possible profit for the day.  In other words, find the lowest point and the highest point. Subtract the value from the highest to the lowest and return that value. ",
      "language": "javascript",
      "code": msp
    }
  ];

  return (
    <div>
      <div>
        <h3>Caesar Cipher</h3>
        <p>Caesar Cipher with a key</p>
        <p>Language: Javascript</p>
        <pre className="prettyprinted">
          <code className="language-js hljs" >
              <span>
                {`${caesar}`}
              </span>
          </code>
        </pre>
      </div>

      <div>
        <h3>Max Stock Provide</h3>
        <p>Caesar Cipher with a key</p>
        <p>Language: Javascript</p>
        <pre className="prettyprinted">
          <code className="language-js hljs" >
              <span>
                {`${msp}`}
              </span>
          </code>
        </pre>
      </div>
    </div>
  )
};

export default CodeSamples