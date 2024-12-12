import React from "react";
import skills from "../assets/history/skills.json";

const ResumeSkills = (): JSX.Element => { 
  // Sort each category alphabetically
  const sortSkills = Object.entries(skills).reduce((acc,[key, value])=> {
    acc[key] = value.sort((a:string, b:string)=> a.localeCompare(b));
    return acc;
  }, {} as Record<string, string[]>);

return (

  <div className="bg-white/20 transition-colors p-4 mt-10">
    <h3 className="text-xl sm:text-2xl underline mb-4">Skills</h3>
    <div>
      {Object.entries(sortSkills).map(([category, skillsList]): JSX.Element => {
        return(
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-4 mb-6">
          <div className="text-lg sm:text-xl italic lg:w-1/4">{category.replace(/_/g, " ")}</div>
          <ul className="grid grid-cols-1 gap-2 lg:w-3/4">
            {skillsList.map((skill: string, id: number): JSX.Element => {
              return (
                <li className="px-2">{skill}</li>
              );
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