import React from "react";

/* Logos */
import HTML_Logo from "../assets/skills/HTML-Logo.svg";
import CSS_Logo from "../assets/skills/CSS-logo.svg";
import Javascript_Logo from "../assets/skills/Javascript-Logo.svg";
import ReactJS_Logo from "../assets/skills/ReactJS-Logo.svg";
import NodeJS_Logo from "../assets/skills/NodeJS-Logo.svg";
import PostgreSQL_Logo from "../assets/skills/PostgreSQL-Logo.svg";
import REST_API_Logo from "../assets/skills/REST-API-Logo.svg";
import Postman_Logo from "../assets/skills/Postman-Logo.svg";
import CPP_Logo from "../assets/skills/Cplusplus-Logo.svg";
import Python_Logo from "../assets/skills/Python-Logo.svg";
import Java_Logo from "../assets/skills/Java-Logo.svg";
import Git_Logo from "../assets/skills/Git-logo.svg";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills &amp; Tools</h2>
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
            <div className="skills-container-item">
              <img src={NodeJS_Logo} alt="Node.js Logo" />
              <p>Node.js</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={PostgreSQL_Logo} alt="PostgreSQL Logo" />
              <p>PostgreSQL</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={REST_API_Logo} alt="REST API Logo" />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Postman_Logo} alt="Postman Logo" />
              <p>Postman</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={CPP_Logo} alt="C++ Logo" />
              <p>C++</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Python_Logo} alt="Python Logo" />
              <p>Python</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Java_Logo} alt="Java Logo" />
              <p>Java</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Git_Logo} alt="Git Logo" />
              <p>Git</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
