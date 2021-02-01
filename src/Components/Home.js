import React, {useState} from 'react';
import Link from '@material-ui/core/Link'
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import {FaMediumM} from "@react-icons/all-files/fa/FaMediumM";
import './Components.css';
import { makeStyles } from '@material-ui/core';
import { CallToActionSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  iconDiv: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    height: '80vh',
    width: '100vw',
    marginTop: '.5em',
    marginLeft: '.75em',
    fontSize: '110px',
  },
  firstIcon: {
    color:'rgba(245, 245, 245, 0.315)'
  }
})

const Homepage = () => {
  const classes = useStyles();

  const contacts = [
    {
      title: 'linkedIn',
      link: 'https://www.linkedin.com/in/nataliemichellekendrick/', 
      icon: <FaLinkedinIn />},
    {
      title: 'gmail',
      link: 'mailto: natalie.m.kendrick@gmail.com', 
      icon:  <FaGoogle />},
    {
        title: 'twitter',
        link: 'https://twitter.com/NKendrick12', 
        icon: <FaTwitter />},
    {
        title: 'github',
        link: 'https://github.com/listenToRipley', 
        icon: <FaGithubAlt /> },
    {
       title: 'medium',
       link: 'https://listentoripley.medium.com/', 
       icon: <FaMediumM/>},
      
  ]

  return (
    <div className='homepage'>
      <h1 align='center' className='name'>Natalie Kendrick</h1>
      <p align='center'  className='title'><em>Full Stack Developer</em></p>
      <div align='center' className={classes.iconDiv}>
      {contacts.map((connect) => {
        return(
        <Link className={classes.homeIcons} href={connect.link}>
          {connect.icon}
        </Link>
        )
      })}

      
      </div>
    
    </div>
  )
}

export default Homepage;