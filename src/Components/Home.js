import React from 'react';
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import './Components.css'

const Homepage = () => {

  return (
    <div className="Homepage">
      <h1>Natalie Kendrick</h1>
        <a href='https://www.linkedin.com/in/nataliemichellekendrick/'>
          <FaLinkedin className={'homeIcons'} />
        </a>
      
        <a href='mailto: natalie.m.kendrick@gmail.com'>
          <FaGoogle className={'homeIcons'}/>
        </a>
        <FaTwitterSquare className={'homeIcons'}/>
        <FaGithubAlt className={'homeIcons'}/> 
    
    </div>
  )
}

export default Homepage;