import React from "react";
import CodeSamples from "./CodeSamples";
import projects from "../info/history/projects.json"

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

  console.log(projectsList)

  return (
    <div>
      <div>
        {projectsList.map((proj: any) => {
          return (
            <div key={proj.id}>
              <p>{proj.projectName}</p>
              <p>placeholder for image for now</p>
              <p>Completed: <span>{proj.completed.year}</span></p>
              <div>Summary: 
                <span>{proj.description}</span>
                <br />
                <p>Skills:</p><ul>{proj.skills.map((skill:string) => {
                  return (
                    <li>{skill}</li>
                  )
                })}</ul>
              </div>
              <a href={proj.site}>View Work</a>
              <br />
              <a href={proj.code}>View Code</a>
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