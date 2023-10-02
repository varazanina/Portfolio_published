import "./work.css";
import Places from "../../assets/places.png";
import Smukfest from "../../assets/smukfest.png";
import Swap from "../../assets/swap.png";
import Pinky from "../../assets/pinky.png";
import Todo from "../../assets/todo.png";
import Help from "../../assets/help.png";
import Moms from "../../assets/moms.png";
import Grundfos from "../../assets/grundfos.png";
import HTML from "../../assets/html_icon.png";
import CSS from "../../assets/css_icon.png";
import JS from "../../assets/js_icon.png";
import XD from "../../assets/xd_icon.png";
import Github from "../../assets/github_icon.png";
import Figma from "../../assets/figma_icon.png";
import UI from "../../assets/ui.png";
import Wordpress from "../../assets/wordpress_icon.png";
import AI from "../../assets/ai.png";
import Rea from "../../assets/react_icon.png";

import React from 'react';

const workData = [
  {
    heading: "Hidden places - Exam project",
    icons: [XD, HTML, CSS, JS],
    imageUrl: Places,
    text: "For my initial exam project, I embarked on an individual endeavor titled 'Hidden Places in Brabrand.' This project involved coding just a few pages, where I applied various UX and UI methodologies to create an engaging and user-friendly experience.",
    url: ["https://xd.adobe.com/view/7b520a6e-6426-4fb8-b546-caf70b48b885-2e01/?fullscreen", "https://github.com/varazanina/Exam-project"],
    image: [XD, Github],
    button: "https://varazanina.github.io/Exam-project/",
  },
  {
    heading: "Smukfest",
    icons: [Figma, UI],
    imageUrl: Smukfest,
    text: "Our group project, a collaborative effort between Smukfest and IBM, involved the application of fundamental UI principles to create a seamless user experience. By leveraging these principles, we crafted a user-centric design solution using Figma, resulting in an impressive and intuitive outcome for both the festival attendees and IBM's technology integration.",
    url: ["https://www.figma.com/file/jKnrURPOLrJeAJYttlbfqC/App-design?type=design&node-id=0%3A1&mode=design&t=7jun2aSzThIvg3lG-1"],
    image: [Figma],
  },
  {
    heading: "Swaplanguage blog",
    icons: [Figma, Wordpress],
    imageUrl: Swap,
    text: "In partnership with Swaplanguage, our team of four implemented several enhancements within their blog. This collaborative effort culminated in the creation of a Figma prototype and the development of a WordPress website, offering an enriched user experience and improved functionality.",
    url: ["https://www.figma.com/file/m6FI32avuRCWZyTtqg7AQL/SwapLanguage?type=design&node-id=218%3A3101&mode=design&t=ExxN9OBQqye6jQYo-1"],
    image: [Figma],
    button: "https://swaplanguage.maciejrutkowski.dk/?cat=3",
  },
  {
    heading: "Pinky's secrets",
    icons: [Wordpress],
    imageUrl: Pinky,
    text: "For my individual exam project, I was tasked with creating a blog on a topic of my choice within a 24-hour time frame. This challenge pushed me to acquire new skills in implementing custom code within WordPress, allowing me to become more proficient and comfortable with the platform during the process.",
    url: ["https://www.figma.com/file/m6FI32avuRCWZyTtqg7AQL/SwapLanguage?type=design&node-id=218%3A3101&mode=design&t=ExxN9OBQqye6jQYo-1"],
    image: [Github],
    button: "https://examextra.varazanina.com/",
  },
  {
    heading: "To-do list - Small React app",
    icons: [HTML, CSS, JS, Rea],
    imageUrl: Todo,
    text: "During my exploration of React, I crafted a compact yet practical to-do list application. Through this project, I gained a profound understanding of how to effectively employ state management, allowing me to implement essential features such as task addition, removal, and task completion tracking.",
    url: ["https://github.com/varazanina/To-do_list"],
    image: [Github],
    button: "https://todo.varazanina.com/",
  },
  {
    heading: "Her for dig",
    icons: [Figma, HTML, CSS, JS, Wordpress],
    imageUrl: Help,
    text: "As a part of a team of four, we embarked on an exam project focused on a real-world case. Our mission involved building a website from the ground up for 'Here for You,' an organization committed to providing free therapy for individuals with financial difficulties. During this endeavor, I further developed my WordPress skills, actively contributing to the creation of the website by writing custom code and tailoring the design to meet the organization's specific needs.",
    url: ["https://www.figma.com/file/OSiB68Lpbffek6Uv4C4Ft3/Exam-Project-2nd-semester?type=design&node-id=735%3A5752&mode=design&t=RosfV2gjLVOLi6oZ-1"],
    image: [Figma],
    button: "https://herfordig.varazanina.com/1685524882186/",
  },
  {
    heading: "Moms in Motion",
    icons: [Figma, AI],
    imageUrl: Moms,
    text: "In a team of four, we were tasked with a one-week project to design a landing page for a product of our choosing, catering to a specific target audience. Our challenge was to leverage artificial intelligence as extensively as possible throughout the creative process. The result of our efforts culminated in the creation of a Figma prototype, showcasing a forward-thinking and AI-driven landing page tailored to our chosen demographic.",
    url: ["https://www.figma.com/file/bDyM5QKefFy8MJDRBxkhAr/Moms-in-Motion-(MiM)?type=design&node-id=0%3A1&mode=design&t=AgbYkpmlNw9fH1Cv-1"],
    image: [Figma],
  },
  {
    heading: "Grundfos",
    icons: [XD, HTML, CSS, JS],
    imageUrl: Grundfos,
    text: "For my initial exam project, I embarked on an individual endeavor titled 'Hidden Places in Brabrand.' This project involved coding just a few pages, where I applied various UX and UI methodologies to create an engaging and user-friendly experience.",
    url: ["https://xd.adobe.com/view/b70c2c11-13b6-473b-ae63-f7e4c46e8b43-e25f/", "https://github.com/Shiviara/uxui"],
    image: [XD, Github],
    button: "https://shiviara.github.io/uxui/",
  },
];


export const Work = () => (
  <>
  <h1 id="projects">My projects</h1>
    <div className="work-list">
      {workData.map((item, index) => (
        <div className={`work-item ${index % 2 === 0 ? 'work-item-left' : 'work-item-right'}`} key={index}>
          <div className="pictureSide oneItem">
            <img className="imageP" src={item.imageUrl} alt={item.heading} />
          </div>
          <div className="textSide oneItem">
            <h2>{item.heading}</h2>
            <div className="iconPack">
              {item.icons.map((icon, iconIndex) => (
                <img key={iconIndex} src={icon} alt={icon} />
              ))}
            </div>
            <p className="text">{item.text}</p>
            <div className="iconsLinks">
              {item.image.map((image, imageIndex) => (
                <a key={imageIndex} href={item.url[imageIndex]} target="_blank" rel="noopener noreferrer">
                  <img key={imageIndex} src={image} alt={image} />
                </a>
              ))}
              {item.button && (
              <a href={item.button} target="_blank" rel="noopener noreferrer">
                <button>Live</button>
              </a>
            )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );