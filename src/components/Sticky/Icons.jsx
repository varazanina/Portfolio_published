import "./icons.css";
import LinkedIn from "../../assets/linkedin_icon.png";
import CV from "../../assets/cv_icon.png";
import GitHub from "../../assets/github_icon.png";
import ScrollUp from "../../assets/scroll_up_icon.png"


import React from 'react'

export const Icons = () => {

  return (
    <>
      <div className="iconsContainer">
        <a href="https://www.linkedin.com/in/nina-z%C3%A1vodsk%C3%A1-635887251/" target="_blank" rel="noopener noreferrer"><img className="icons" src= {LinkedIn} alt="LinkedIn Profile link"/></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><img className="icons" src= {CV} alt="CV link" /></a>
        <a href="https://github.com/varazanina" target="_blank" rel="noopener noreferrer"><img className="icons" src= {GitHub} alt="GitHub link" /></a>
      </div>
      <div className="scrollContainer">
        <a href="#home"><img className="icons" src={ScrollUp} alt="Scroll up" /></a>
      </div>
    </>
  )
}
