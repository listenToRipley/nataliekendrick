import React from "react"; 
import ResumeExperience from "./ResumeExp";
import ResumeContacts from "./ResumeContacts";
import ResumeSkills from "./ResumeSkills";
import Education from "./Education";
import Certifications from "./Certifications";

//TODO:
//1. Add location information
//2. Format better

const Resume = (): JSX.Element =>  {

  return (
    <div>
      <div className="scroll-smooth flex h-100% overflow-auto">
      <div className="w-40 col-auto">
        <div className="bg-white/20 transition-colors p-4 justify-center mt-10">
          <h1>Natalie Kendrick</h1>
          <p className="title">Software Developer</p>
        </div>
        <div>
        <ResumeContacts/>
        </div>
      </div>

      <div>
        <div className="bg-white/20 transition-colors p-4 justify-center mt-10 ml-4">
          <h2 className="mt-2 mb-3  text-2xl">Mission</h2>
          <p>After working in various fields, I have developed a comprehensive knowledge of business practices. This means I understand the importance of leveraging these skills to provide sustainable and meaningful practices that create innovative, efficient, and effective products to support all parties. </p>
        </div>
        <div className="ml-4">
        <ResumeExperience/>
      </div>
      <div className="ml-4">
        <Education/>
      </div>
      <div className="ml-4">
        <ResumeSkills/>
      </div>
      <div className="ml-4">
        <Certifications/>
      </div>
      <div className=" bg-white/20 transition-colors p-4 justify-center mt-10 ml-4 mb-8">
        <div className="references">
        <div className="text-2xl mr-4 mb-2 underline">References</div>
          <span>Out of respect for the privacy of those who are kind enough to provide references for me,           <a 
          href="https://docs.google.com/spreadsheets/d/1xOWVDYFLIk4DrofA3K6GosPREidyfyjn-aBjJGK02M4/edit?usp=sharing"
          hrefLang="references google sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime-300 transition duration-150 ease-in-out underline"
          >
            their information only be provided upon request.
          </a></span>
        </div>
      </div>
      </div>


    </div>
    </div>
  )

}; 

export default Resume;