import React from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
  source:{
    type: string;
    title: string;
  },
  bio: string; 
};

interface Intro {
  name: string;
  quote: Quote; 
  pronouns: string; 
};

const About = (): JSX.Element => {

  return (
    <div>
      <p>Placeholder</p>
    </div>
  )
};

export default About; 