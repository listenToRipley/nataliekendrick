import React from "react";
import CodeSamples from "./CodeSamples";
import projects from "../info/history/projects.json";

const Projects = (): JSX.Element => {

  //TODO:
  // 1. Add images for projects
  // 2. Add functionality for carousel
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
    <div className="bg-fixed h-screen min-h-screen object-cover p-4 scroll-smooth overflow-auto ">
      <div className="text-5xl">Projects</div>
      <div className="flex">

          <div id="previous" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
            <p>"!"</p>
          </div>
          

      <div id="carousel" className="mt-4 flex w-full flex-1 gap-4 overflow-x-auto scroll-smooth pb-5">
      <div className="flex">
        {projectsList.map((proj: any): JSX.Element => {
          const imgPath= require(`../assets/images/projectImgs/${proj.image}`)

          return (
            <div key={proj.id} className="min-w-[60] md:min-w-[15%] ml-4">
              <p>{proj.projectName}</p>
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20">
                <img className="w-full" src={imgPath} alt={proj.altText} />
              </div>
              <div className="p-8 divide-y divide-slate-20">
              <p>Completed: <span>{proj.completed.year}</span></p>
              <div className="flex flex-col"> 
                <span className="italics">Summary:</span> 
                <span className="bg-brown">{proj.description}</span>
                <br />
              </div>
              <div>
              <p>Skills:</p><ul className="">{proj.skills.map((skill:string) => {
                  return (
                    <li className="first:pt-0 last:pb-0">{skill} </li>
                  )
                })}</ul>
              </div>
              <div>
              <a href={proj.site}>View Work</a>
              </div>
  
              <div>
              <a href={proj.code}>View Code</a>
              </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>

      <div id="next" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <p>"!!"</p>
          </div>

      </div>
      
      <div>
        <CodeSamples/>
      </div>
    </div>
  )

};

export default Projects;