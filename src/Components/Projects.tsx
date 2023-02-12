import React from "react";
import CodeSamples from "./CodeSamples";
import projects from "../assets/history/projects.json";
import { Project } from "../../Modules/projects";

const Projects = (): JSX.Element => {

  const projectsList: Project[] = projects.projects;

  return (
    <div className="bg-fixed h-screen min-h-screen object-cover p-4 scroll-smooth overflow-auto ">
      <div className="text-5xl">Projects</div>
      <div>
        This page is my main work at the moment. You may see changes from time to time when you visit and I would be happy to discuss those changes.
      </div>
      <div className="flex">

      {/* <div id="previous" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
        <p>"!"</p>
      </div> */}
          

      <div id="carousel" className="mt-4 flex w-full flex-1 gap-4 overflow-x-auto scroll-smooth pb-5">
      <div className="flex">
        {projectsList.map((proj: Project, index:number): JSX.Element => {
          const imgPath= require(`../assets/images/projectImgs/${proj.image}`)

          return (
            <div key={proj.id} className="min-w-[60] md:min-w-[15%] ml-4">
              <div className="text-xl has-tooltip ">
                <span 
                className="tooltip shadow-lg p-1 mt-8 duration-300 bg-sky-900 rounded-lg text-sky-500 ease-in-out">
                  See {proj.projectName} code
                </span>
                <a 
                href={proj.code}
                className="hover:text-teal-100 transition duration-150 ease-in-out">
                  {proj.projectName}</a>
                
              </div>
              <div className="text-xl has-tooltip">
              <a href={proj.site}>
                <span 
                className="tooltip shadow-lg p-1 mt-12 ml-2 duration-300 bg-sky-500 rounded-lg text-sky-900 ease-in-out">
                  See {proj.projectName}'s site
                </span>
                <img 
                  className="aspect-auto w-full md:content-around shadow-md shadow-black/50 rounded-md  hover:shadow-teal-200 transition duration-150 ease-in-out" 
                  src={imgPath} 
                  alt={proj.altText} />
              </a>
              </div>
              <div className="p-8">
              <p>Details:</p>
              <div className=" divide-y divide-slate-20">
              
              <p>Completed: <span>{proj.completed.year}</span></p>
              <div className="flex flex-col"> 
                <span className="italics">Summary:</span> 
                <span className="bg-brown">{proj.description}</span>
                <br />
              </div>
              <div>
              <p>Skills:</p><ul className="">{proj.skills.map((skill:string, index:number) => {
                  return (
                    <li key={index} className="first:pt-0 last:pb-0">{skill} </li>
                  )
                })}</ul>
              </div>
              </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>

      {/* <div id="next" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <p>"!!"</p>
          </div> */}

      </div>
      
      <div>
        <CodeSamples/>
      </div>
    </div>
  )

};

export default Projects;