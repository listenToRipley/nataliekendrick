import React from "react";
import CodeSamples from "./CodeSamples";
import projects from "../info/history/projects.json";

const Projects = (): JSX.Element => {

  //TODO:
  // 1. Add images for projects
  interface Project {
    "id": number,
    "projectName": string,
    "completed": {
      "year": number,
      "month": string
    },
    "description": string, 
    "skills": string[],
    "color": string,
    "image": string,
    "altText": string,
    "site": string,
    "code": string
  }

  const projectsList: Project[] = projects.projects;

  // console.log(projectsList)

  return (
    <div className="bg-fixed h-screen min-h-screen object-cover p-8 scroll-smooth overflow-auto">
      <div className="flex">
        {projectsList.map((proj: any) => {
          const relative= proj.image
          console.log(relative)
          return (
            <div key={proj.id} className="m-32 col-auto">
              <p>{proj.projectName}</p>
              <div className="block h-20 w-20 bg-black/80">
                <img src={proj.image} alt={proj.altText} />
              </div>
              <div className="">
              <p>Completed: <span>{proj.completed.year}</span></p>
              <div className="flex"> 
                <span>Summary:</span> 
                <span className="bg-brown">{proj.description}</span>
                <br />
              </div>
              <div>
              <p>Skills:</p><ul className="flex">{proj.skills.map((skill:string) => {
                  return (
                    <li>{skill}</li>
                  )
                })}</ul>
              </div>
              <a href={proj.site}>View Work</a>
              <br />
              <a href={proj.code}>View Code</a>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <CodeSamples/>
      </div>
    </div>
  )

};

export default Projects;