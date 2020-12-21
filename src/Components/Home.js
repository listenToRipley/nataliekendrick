import React from 'react';
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";

const Homepage = () => {

  return (
    <div className="Homepage">
      <h1>Natalie Kendrick</h1>
      <FaLinkedin />
      <FaGoogle />
      <FaTwitterSquare/>
      <FaGithubAlt/>
    </div>
  )
}

export default Homepage;