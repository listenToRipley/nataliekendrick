import React, {useState, useEffect} from "react";
import quotes from "../info/history/quotes.json";
import profile from './projectImgs/profile.jpeg';

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
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [quoteId, setQuoteId] = useState< number | undefined>(undefined);

  useEffect(() => {
    const findQuote = () => {
      const quotesLen = Object.keys(quotes).length
      let quoteId: number = Math.floor(Math.random() * quotesLen);
      return setQuoteId(quoteId); 
    };

    findQuote(); 
  }, []); 

  useEffect(() => {

    if (quoteId !== undefined) {
      const newQuote: Quote = quotes[quoteId]
      return setQuote(newQuote)
    }
  }, [quoteId]);

    const createQuote = () => {
      if (quote !== undefined) {
        return (
          <div className="quote">
          <p>{quote?.quote}</p> <span>~</span><a href={quote.bio}><em>{quote.author}</em></a>
          {quote.source ? <div><strong>{quote.source.title}</strong> <p>{quote.source.type}</p></div> : <br/>}
        </div>
        ); 
      }; 
  };
  

  return (
    <div>
      <img className="App-logo" src={profile} alt="natalie kendrick"></img>
      <p className="name">Natalie Kendrick</p>
      <div className="pronouns">
        <em>pronouns: she/her/hers</em>
        {createQuote()}
      </div>
      <div className="body">
        <p>Creatively driven, flexible, organized, goal-oriented, and bringing a unique perspective to the table. Natalie is a motivated professional with extensive experience ranging from web development and fine arts to customer service.</p>
        <p> When it comes to problem-solving, she is proactive and a self-starter who believes that amicable and efficient solutions can be found. A team player who knows her successes benefits the team as much as they do her.</p>
        <p>She loves to read, hike with her dog, do yoga, and play board games in her spare time. In addition, she is passionate about food, cooking, and sharing those meals with great conversation. She is also a massive movie buff and enjoys international television.</p>
        <p>She looks forward to hearing from you and hopes you have a fantastic adventure today.</p>
      </div>
    </div>
  )
};

export default About; 