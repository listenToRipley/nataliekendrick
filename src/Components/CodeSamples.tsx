import React from "react";
import caesarCipherWKey from "./Samples/caesar"

const CodeSamples = (): JSX.Element => { 

  const caesar: any = caesarCipherWKey

  return (
    <div>
      <div>
      <h3>Caesar Cipher</h3>
      <p>Caesar Cipher with a key</p>
      <pre className="prettyprinted">
        <code className="language-js hljs" >
            <span>
              {caesar}
            </span>
        </code>
      </pre>
      </div>
    </div>
  )
};

export default CodeSamples