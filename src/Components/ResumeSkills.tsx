import React from "react";
import skills from "../assets/history/skills.json";

const ResumeSkills = (): JSX.Element => { 
  // Sort each category alphabetically
  const sortSkills = Object.entries(skills).reduce((acc,[key, value])=> {
    acc[key] = value.sort((a:string, b:string)=> a.localeCompare(b));
    return acc;
  }, {} as Record<string, string[]>);

return (

  <div className="bg-white/20 transition-colors p-4 mt-10 flex">
    <h3 className="text-2xl mr-4 underline">Skills</h3>
    <div>
      {Object.entries(sortedSkills).map(([category, skillsList]): JSX.Element => {
        return(
        <div>
          <div className="text-xl italic">{category.replace(/_/g, " ")}</div>
          <ul>
            {skillsList.map((skill: string, id: number) => {
              return(
                <li>{skill}</li>
              )
            })}
          </ul>
        </div>
        )
      })}
    </div>
  </div>

);

};

export default ResumeSkills