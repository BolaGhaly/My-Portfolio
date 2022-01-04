import React from "react";
import HTML_Logo from "../assets/skills/HTML-Logo.svg";
import CSS_Logo from "../assets/skills/CSS-logo.svg";
import Javascript_Logo from "../assets/skills/Javascript-Logo.svg";
import ReactJS_Logo from "../assets/skills/ReactJS-Logo.svg";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="text-center">Skills</h2>
      <div className="skills-container-div">
        <ul className="skills-container-ul">
          <li>
            <div className="skills-container-item">
              <img src={HTML_Logo} alt="HTML Logo" />
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={CSS_Logo} alt="CSS Logo" />
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Javascript_Logo} alt="Javascript Logo" />
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={ReactJS_Logo} alt="React Javascript Logo" />
              <p>React JS</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
          <li>
            <div className="skills-container-item"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
