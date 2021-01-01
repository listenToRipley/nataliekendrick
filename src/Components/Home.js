import React from 'react';
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import {FaMediumM} from "@react-icons/all-files/fa/FaMediumM"
import './Components.css'

const Homepage = () => {

  return (
    <div className="homepage">
      <h1 className='name'>Natalie Kendrick</h1>
      <div className='iconDiv'>
      <a href='https://www.linkedin.com/in/nataliemichellekendrick/'>
          <FaLinkedinIn className={'homeIcons'} />
        </a>
      
        <a href='mailto: natalie.m.kendrick@gmail.com'>
          <FaGoogle className={'homeIcons'}/>
        </a>
        
        <a href='https://twitter.com/NKendrick12'>
          <FaTwitter className={'homeIcons'}/>
        </a>
        
        <a href='https://github.com/listenToRipley'>
          <FaGithubAlt className={'homeIcons'}/> 
        </a>

        <a href='https://listentoripley.medium.com/'>
          <FaMediumM className={'homeIcons'}/>
        </a>
      </div>
    
    </div>
  )
}

export default Homepage;