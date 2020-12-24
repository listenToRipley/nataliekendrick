import React from 'react';
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import {FaMediumM} from "@react-icons/all-files/fa/FaMediumM"
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
        
        <a href='https://twitter.com/NKendrick12'>
          <FaTwitterSquare className={'homeIcons'}/>
        </a>
        
        <a href='https://github.com/listenToRipley'>
          <FaGithubAlt className={'homeIcons'}/> 
        </a>

        <a href='https://listentoripley.medium.com/'>
          <FaMediumM className={'homeIcons'}/>
        </a>
    
    </div>
  )
}

export default Homepage;