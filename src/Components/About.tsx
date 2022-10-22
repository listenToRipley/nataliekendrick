import React, {useState, useEffect} from "react";
import quotes from "../info/history/quotes.json";

// #TODO: 
// 1. stop quotes from loading twice 
// 2. map a quote to the page 
// 3. store intro and call it. 


interface Quote {
  id: number;
  quote : string;
  author: string;
  source?:{
    type: string;
    title: string;
  },
  bio: string; 
};

const About = (): JSX.Element => {
  const [quote, setQuote] = useState<Quote | undefined>(undefined) 

  const findQuote = () : number => {
    const quotesLen = Object.keys(quotes).length
    let quoteId: number = Math.floor(Math.random() * quotesLen);
    console.log(quoteId)
    return quoteId
  };

  const id: number = findQuote();

  useEffect(() => {
    const newQuote: Quote = quotes[id]
    return setQuote(newQuote)
  }, []);

  console.log(quote)

  const createQuote = () => {
    if (quote !== undefined) {
      return (
        <div className="quote">
        <p>{quote?.quote}</p> <span>~</span><a href={quote.bio}><em>{quote.author}</em></a>
        {quote.source ? <div><strong>{quote.source.title}</strong>/<p>{quote.source.type}</p></div> : <br/>}
      </div>
      ); 
    }; 
  };
  

  return (
    <div>
      <p className="name">Natalie Kendrick</p>
      <div className="pronouns">
        <em>pronouns: she/her/hers</em>
        {createQuote()}
      </div>
    </div>
  )
};

export default About; 