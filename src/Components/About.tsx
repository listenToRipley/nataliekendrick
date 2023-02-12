import React, {useState, useEffect} from "react";
import quotes from "../info/history/quotes.json";
import profile from "../assets/images/projectImgs/profile.jpeg";
import { Quote } from "../../Modules/quote";
import ResumeContacts from "./ResumeContacts";

//TODO:
//1. add interface for quotes.

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

    const createQuote = (): JSX.Element => {
      if (quote !== undefined) {
        return (
          <div className="quote">
          <p>"{quote.quote}"</p>~<a href={quote.bio}><em>{quote.author}</em></a> {quote.source ? <div><strong>{quote.source.title}</strong> <p>{quote.source.type}</p></div> : <br/>}
        </div>
        ); 
      } else {
        return (
          <br />
        )
      }
  };
  

  return (
    <div className=" min-h-screen -mt-10 scroll-smooth-100% overflow-auto grid">
    <div className="justify-center grid mx-10 my-10 auto-cols-auto">
      <img className="aspect-auto mt-10 rounded-full max-h-80 group-open:rotate-45 transition-all group-open:top-2 relative" src={profile} alt="natalie kendrick"></img>
      <div className = "justify-center block">
        <p id="name" className="mt-10 text-lime-300 h-100% text-8xl ">Natalie Kendrick</p>
        <div id="pronouns" className="mt-4 text-xl">
          <em>pronouns: she/her/hers</em>
        </div>
        <div id={`${quoteId}`} className="bg-white/20 transition-colors p-4 justify-center mt-10">
          {createQuote()}
        </div>
  
      </div>
      <div className="bg-white/20 transition-colors justify-center mt-4">
        <div className="p-4">
          <p className="pt-4 pb-4">Creatively driven, flexible, organized, goal-oriented, and bringing a unique perspective to the table. Natalie is a motivated professional with extensive experience ranging from web development and fine arts to customer service.</p>
          <p className="pb-4"> When it comes to problem-solving, she is proactive and a self-starter who believes that amicable and efficient solutions can be found. A team player who knows her successes benefits the team as much as they do her.</p>
          <p className="pb-4">She loves to read, hike with her dog, do yoga, and play board games in her spare time. In addition, she is passionate about food, cooking, and sharing those meals with great conversation. She is also a massive movie buff and enjoys international television.</p>
          <p className="pb-4">She looks forward to hearing from you and hopes you have a fantastic adventure today.</p>
        </div>
      </div>
        <div className="flex justify-self-end self-auto md:self-end -mt-76">
        <ResumeContacts/>
        </div>
      </div>
    </div>
  )
};

export default About; 