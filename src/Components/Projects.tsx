import React from "react";
import CodeSamples from "./CodeSamples";
import projects from "../info/history/projects.json"

const Projects = (): JSX.Element => {

  //TODO:
  // 1. Loop each json project and provide components
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
        <CodeSamples/>
      </div>
    </div>
  )

};

export default Projects;