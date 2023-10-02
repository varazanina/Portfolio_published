import "./footer.css";
import GitHub from "../../assets/github_icon.png";
import Facebook from "../../assets/facebook_icon.png";
import LinkedIn from "../../assets/linkedin_icon.png";

import React from 'react'

export const Footer = () => {
  return (
    <div id="footer">
      <div className="round">
        <a href="https://github.com/varazanina" target="_blank" rel="noopener noreferrer"><img className="icon_pack" src={GitHub} alt="GitHub Icon" /></a>
        <a href="https://www.linkedin.com/in/nina-z%C3%A1vodsk%C3%A1-635887251/" target="_blank" rel="noopener noreferrer"><img className="icon_pack" src={LinkedIn} alt="LinkedIn Icon" /></a>
        <a href="https://www.facebook.com/profile.php?id=100009856172614" target="_blank" rel="noopener noreferrer"><img className="icon_pack" src={Facebook} alt="Facebook Icon" /></a>
      </div>
      <p className="round" id="rights">All Rights Reserved © 2023 Nina Sarah Zavodska</p>
    </div>
  )
}
