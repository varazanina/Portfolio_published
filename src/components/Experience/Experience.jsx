import "./experience.css";
import HTML from "../../assets/html_white.png";
import CSS from "../../assets/css_white.png";
import JS from "../../assets/js_white.png";
import Rea from "../../assets/react_white.png";
import Figma from "../../assets/figma_icon.png";
import Play from "../../assets/play_icon.png";

import React from 'react'

export const Experience = () => {
  return (
    <div className="eContainer" id="experience">
      <div className="item" id="leftItem">
        <h1>Frontend</h1>
        <div className="oneLine">
          <div>
            <img src={HTML} alt="HTML icon" />
            <img src={CSS} alt="CSS icon" />
            <img src={JS} alt="JavaScript icon" />
          </div>
          <img src={Play} alt="Click to see more" />
        </div>
        <img src={Rea} alt="React icon" />
      </div>
      <div className="item" id="rightItem">
        <h1>UX/UI</h1>
        <img src={Figma} alt="Figma icon" />
      </div>
    </div>
  )
}
