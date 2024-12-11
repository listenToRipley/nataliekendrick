import React from "react";
import skills from "../assets/history/skills.json";

const ResumeSkills = (): JSX.Element => { 
  // Sort each category alphabetically
  const sortSkills = Object.entries(skills).reduce((acc,[key, value])=> {
    acc[key] = value.sort((a:string, b:string)=> a.localeCompare(b));
    return acc;
  }, {} as Record<string, string[]>);

return (

  <div className="bg-white/20 transition-colors p-4 mt-10 flex flex-col space-y-6">
    <h3 className="text-2xl underline">Skills</h3>
    <div>
      {Object.entries(sortSkills).map(([category, skillsList]): JSX.Element => {
        return(
        <div key={category}>
          <div className="text-xl font-bold capitalize break-words">
            {category.replace(/_/g, " ")}
          </div>
          <ul className="p-2 list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
            {skillsList.map((skill: string, id: number): JSX.Element => {
              return(
                <li className="text-sm">{skill}</li>
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