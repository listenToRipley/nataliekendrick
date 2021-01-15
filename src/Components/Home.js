import React from 'react';
import Link from '@material-ui/core/Link'
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import {FaMediumM} from "@react-icons/all-files/fa/FaMediumM";
import './Components.css'

const Homepage = () => {

  return (
    <div className='homepage'>
      <h1 align='center' className='name'>Natalie Kendrick</h1>
      <p align='center'  className='title'>Full Stack Developer</p>
      <div align='center' className='iconDiv'>

      <Link className='firstIcon' href='https://www.linkedin.com/in/nataliemichellekendrick/'>
          <FaLinkedinIn className={'homeIcons'} />
        </Link>
      
        <Link href='mailto: natalie.m.kendrick@gmail.com'>
          <FaGoogle className={'homeIcons'}/>
        </Link>
        
        <Link href='https://twitter.com/NKendrick12'>
          <FaTwitter className={'homeIcons'}/>
        </Link>
        
        <Link href='https://github.com/listenToRipley'>
          <FaGithubAlt className={'homeIcons'}/> 
        </Link>

        <Link href='https://listentoripley.medium.com/'>
          <FaMediumM className={'homeIcons'}/>
        </Link>
      </div>
    
    </div>
  )
}

export default Homepage;