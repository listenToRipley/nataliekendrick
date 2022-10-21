import React, {useState, useEffect} from "react";
import quotes from "../info/history/quotes.json";

// #TODO: 
// 1. stop quotes from loading twice 
// 2. map a quote to the page 
// 3. store intro and call it. 


interface Quote {
  id: number;
  quote: string;
  author: string;
  source?:{
    type: string;
    title: string;
  },
  bio: string; 
};

// interface Intro {
//   name: string;
//   quote: Quote; 
//   pronouns: string; 
// };

const About = (): JSX.Element => {
  const [quote, setQuote] = useState<Quote | undefined>(undefined) 

  const findQuote = () : number => {
    const quotesLen = Object.keys(quotes).length
    let quoteId: number = Math.floor(Math.random() * quotesLen);
    return quoteId
  };

  useEffect(() => {
    const id: number = findQuote()
    const newQuote: Quote = quotes[id]
    return setQuote(newQuote)
  }, [])
  
  console.log(quote)

  return (
    <div>
      <p>Placeholder</p>
    </div>
  )
};

export default About; 