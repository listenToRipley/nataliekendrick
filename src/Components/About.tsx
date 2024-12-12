import React, {useState, useEffect} from "react";
import quotes from "../assets/history/quotes.json";
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
  

  return(
    <div className="min-h-screen -mt-10 scroll-smooth-100% overflow-auto grid">
      <div className="grid justify-center mx-10 my-10 auto-cols-auto md:flex md:flex-col">
        {/* Profile Section */}
        <div className="flex flex-wrap items-center mt-8 md:flex-nowrap">
          <img
            className="aspect-auto rounded-full max-h-80 group-open:rotate-45 transition-all relative"
            src={profile}
            alt="Natalie Kendrick"
          />
          <div className="text-sky-800 ml-6 mt-8 md:mt-0 md:flex-col drop-shadow-xl shadow-cyan-200/50">
            <div id="name" className="text-2xl md:text-8xl mb-4 drop-shadow-xl shadow-cyan-200">
              Natalie Kendrick
            </div>
            <div id="pronouns" className="text-xl italic mt-2 md:mt-4 text-end">
              pronouns: she/her/hers
            </div>
          </div>
        </div>

          {/* Quote and About Section */}
        <div className="flex flex-col md:flex-row mt-8 mb-5 gap-4">
            {/* Quote Section */}
            <div className="flex-grow p-6 bg-black/40 text-teal-100 transition-colors rounded-lg shadow-md">
              <div id={`${quoteId}`}>{createQuote()}</div>
            </div>

            {/* About Section */}
            <div className="flex-grow p-6 bg-black/40 text-teal-100 transition-colors rounded-lg shadow-md">
              <p className="pt-4 pb-4">
                I'm Natalie Kendrick, a Software Developer passionate about crafting innovative solutions.
                Technology attracted me because I was tired of reaching a point in my job where I felt I
                knew everything. My outside-the-box thinking and problem-solving skills are a perfect fit.
              </p>
              <p className="pb-4">
                You can find me engrossed in various hobbies when I'm not busy developing applications,
                studying algorithms, or designing/organizing concepts. I love losing myself in a good
                story, whether a book, movie, or TV show. I'm an avid collector of interests (no joke,
                it's a problem), always eager to try new things and explore.
              </p>
              <p className="pb-4">
                Sometimes, it means cooking a new dish I heard about; others, immersing myself in an
                unknown Dungeons and Dragons campaign or trying a new knitting pattern while watching the
                latest K-drama. I throw myself into it with a hundred and ten percent of my energy.
              </p>
              <p className="pb-4">
                My professional life and my hobbies tend to intertwine. I generally like to foster a sense
                of unity and trust within my team, like any D&D team I am a part of. I believe in
                cooperation and recognizing each team member's contributions. I believe in giving credit
                where it is due and ensuring all voices on my team are heard. It's through collaboration
                that we create something truly extraordinary.
              </p>
              <p className="pb-4">
                <a
                  href="mailto:natalie.m.kendrick@gmail.com"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Feel free to contact me, or you can also explore more about me and my work.
                </a>{" "}
                Here's to making the digital world a better and more exciting place!
              </p>
            </div>
        </div>
          {/* Resume Section */}
        <div className="flex justify-self-end self-auto md:self-end bg-black/40 text-teal-100 p-4 rounded-lg shadow-md">
          <ResumeContacts />
        </div>
      </div>
    </div>

  )
};

export default About; 