import React from "react";
import skills from "../assets/history/skills.json";

const ResumeSkills = (): JSX.Element => {
  
  const soft: string[] = skills.soft.sort((a,b) => {
    if (a<b) {return -1}
    if (a>b) {return 1}
    return 0
  });
  const tech: string[] = skills.technical.sort((a,b) => {
    if (a<b) {return -1}
    if (a>b) {return 1}
    return 0
  });

  return (
    <div className="bg-white/20 transition-colors p-4 mt-10 flex">
      <h3 className="text-2xl mr-4 underline">Skills</h3>
      <div>
        <div className="text-xl italic">Soft</div>
        <ul className="p-2">
          {soft.map((skill: string, id: number): JSX.Element => {
            return (
              <li key={id}>{skill}</li>
            )
          })
          }
        </ul>
      </div>

      <div>
        <div className="text-xl italic">Technical</div>
        <ul className="p-2 grid">
          {tech.map((skill: string, id:number): JSX.Element  => {
            return (
              <li className="px-2 col-span-2" key={id}>{skill}</li>
            )
          })
          }
        </ul>
      </div>

    </div>
  )
};

export default ResumeSkills