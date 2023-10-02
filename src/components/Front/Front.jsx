import "./front.css";
import Profile from "../../assets/front_picture.png";
import Profile2 from "../../assets/front_picture2.png";

import React, { useEffect, useState } from 'react';

export const Front = () => {
  const codeSnippetLeft = `const name = 'Nina';
const role = 'Frontend Developer';
const internshipDate = 
'January 2023';`;
  
  const codeSnippetRight = `const intro = \`
  /**
   * Hi, I'm \${name}, a \${role}.
   * 
   * Seeking an internship opportunity 
   * starting in \${internshipDate}.
   * If interested, please contact me.
   */
  \`;`;

  const [typedTextLeft, setTypedTextLeft] = useState('');
  const [typedTextRight, setTypedTextRight] = useState('');
  const [currentIndexLeft, setCurrentIndexLeft] = useState(0);
  const [currentIndexRight, setCurrentIndexRight] = useState(0);
  const typingSpeed = 50; // Adjust typing speed (in milliseconds)

  useEffect(() => {
    if (currentIndexLeft === 0) {
      setTypedTextLeft(codeSnippetLeft.charAt(0));
      setCurrentIndexLeft(1);
    } else if (currentIndexLeft < codeSnippetLeft.length) {
      setTimeout(() => {
        setTypedTextLeft((prevText) => prevText + codeSnippetLeft.charAt(currentIndexLeft));
        setCurrentIndexLeft(currentIndexLeft + 1);
      }, typingSpeed);
    }
  
    if (currentIndexRight === 0) {
      setTypedTextRight(codeSnippetRight.charAt(0));
      setCurrentIndexRight(1);
    } else if (currentIndexRight < codeSnippetRight.length) {
      setTimeout(() => {
        setTypedTextRight((prevText) => prevText + codeSnippetRight.charAt(currentIndexRight));
        setCurrentIndexRight(currentIndexRight + 1);
      }, typingSpeed);
    }
  }, [currentIndexLeft, currentIndexRight, codeSnippetLeft, codeSnippetRight]);
  

  return (
    <div id="home">
      <div className="imageContainer">
        <img id="image" src={Profile} alt="Profile" />
        <img id="image2" src={Profile2} alt="Profile" />
      </div>
      <div className="flexContainer">
        <div className="portfolioContent code-snippet-container">
          {typedTextLeft.split('\n').map((line, index) => (
            <div key={index} className="code-snippet-text">{line}</div>
          ))}
        </div>
        <div className="portfolioContent code-snippet-container">
          {typedTextRight.split('\n').map((line, index) => (
            <div key={index} className="code-snippet-text">{line}</div>
          ))}
        </div>
      </div>
      <div className="spacer"></div>
      <div className="flexContainerButton">
        <a href="#projects"><button className="blackButton cta">My work</button></a>
        <a href="#contact"><button className="pinkButton cta">Contact me</button></a>
      </div>
    </div>
  );
};