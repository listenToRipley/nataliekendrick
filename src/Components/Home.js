import React from 'react';
import Link from '@material-ui/core/Link';
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import {FaMediumM} from "@react-icons/all-files/fa/FaMediumM";
import { makeStyles } from '@material-ui/core';
import gold from './projectImgs/golden.jpeg'

const useStyles = makeStyles({
  home: {
    position:'fixed',
    height:'80%',
    fontFamily: `'Open Sans', sans-serif, 'Bold'`,
    textAlign: 'center',
    zIndex: '-1',
  },
  name: {
    display: 'block',
    padding: '2%',
    fontSize: '75px',
    letterSpacing: '6px',
    marginBottom: '8%',
    color: 'transparent',
    backgroundImage: `url(${gold})`,
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textShadow: '2px 2px 3px rgba(255, 255, 255, 0.199)',
    WebkitBackgroundSize: '2650px 1440px',   
    MozBackgroundClip: 'text',
  },
  title: {
    fontSize: '50px',
    margin: '2%',
    fontSamily: `'Josefin Slab', serif`,
    fontWeight: 500,
    color: 'transparent',
    backgroundImage: `url(${gold})`,
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textShadow: '2px 2px 3px rgba(255, 255, 255, 0.199)',
    WebkitBackgroundSize: '2650px 1440px',   
    MozBackgroundClip: 'text',
  },
  iconDiv: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    height: '80vh',
    width: '100vw',
    marginTop: '.5em',
    fontSize: '75px',
  },
  icons: {
    color:'rgba(245, 245, 245, 0.315)'
  },
  firstIcon: {
    color:'rgba(245, 245, 245, 0.315)'
  },
  eachIcon: {
    display: 'inline',
    marginLeft: '.5em',
    color:'rgba(245, 245, 245, 0.315)',

  }
})

const Homepage = () => {
  const classes = useStyles();

  const contacts = [
    {
      title: 'linkedIn',
      link: 'https://www.linkedin.com/in/nataliemichellekendrick/', 
      icon: <FaLinkedinIn className={classes.firstIcon} />},
    {
      title: 'gmail',
      link: 'mailto: natalie.m.kendrick@gmail.com', 
      icon:  <FaGoogle className={classes.eachIcon}/>},
    {
        title: 'twitter',
        link: 'https://twitter.com/NKendrick12', 
        icon: <FaTwitter className={classes.eachIcon} />},
    {
        title: 'github',
        link: 'https://github.com/listenToRipley', 
        icon: <FaGithubAlt className={classes.eachIcon}/> },
    {
       title: 'medium',
       link: 'https://listentoripley.medium.com/', 
       icon: <FaMediumM className={classes.eachIcon}/>},
      
  ]

  return (
    <div className={classes.home}>
      <h1 align='center' className={classes.name}>Natalie Kendrick</h1>
      <p align='center'  className={classes.title}><em>Full Stack Developer</em></p>
      <div align='center' className={classes.iconDiv}>
      {contacts.map((connect) => {
        return(
        <Link className={classes.icons} href={connect.link}>
          {connect.icon}
        </Link>
        )
      })}

      
      </div>
    </div>
  )
}

export default Homepage;