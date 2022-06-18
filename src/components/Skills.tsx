import React from "react";
import CPP_Logo from "../assets/skills/Cplusplus-Logo.svg";
import Python_Logo from "../assets/skills/Python-Logo.svg";
import Java_Logo from "../assets/skills/Java-Logo.svg";
import HTML_Logo from "../assets/skills/HTML-Logo.svg";
import CSS_Logo from "../assets/skills/CSS-Logo.svg";
import Sass_Logo from "../assets/skills/Sass-Logo.svg";
import Javascript_Logo from "../assets/skills/Javascript-Logo.svg";
import Typescript_Logo from "../assets/skills/Typescript-Logo.svg";
import Bootstrap_Logo from "../assets/skills/Bootstrap-Logo.svg";
import ReactJS_Logo from "../assets/skills/ReactJS-Logo.svg";
import NodeJS_Logo from "../assets/skills/NodeJS-Logo.svg";
import Flask_Logo from "../assets/skills/Flask-Logo.svg";
import PostgreSQL_Logo from "../assets/skills/PostgreSQL-Logo.svg";
import REST_API_Logo from "../assets/skills/REST-API-Logo.svg";
import Postman_Logo from "../assets/skills/Postman-Logo.svg";
import Git_Logo from "../assets/skills/Git-Logo.svg";
import Github_Logo from "../assets/skills/Github-Logo.svg";
import Trello_Logo from "../assets/skills/Trello-Logo.svg";

const Skills = () => {
  return (
    <section className="skills-section s-3" id="skills">
      <h2 className="section-title">Skills &amp; Tools</h2>
      <div className="skills-container-div">
        <ul className="skills-container-ul">
          <li>
            <div className="skills-container-item">
              <img src={CPP_Logo} alt="C++ Logo" height={35} width={35} />
              <p>C++</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Python_Logo} alt="Python Logo" height={35} width={35} />
              <p>Python</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Java_Logo} alt="Java Logo" height={35} width={35} />
              <p>Java</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={HTML_Logo} alt="HTML Logo" height={35} width={35} />
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={CSS_Logo} alt="CSS Logo" height={35} width={35} />
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Sass_Logo} alt="Sass Logo" height={35} width={35} />
              <p>Sass</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={Javascript_Logo}
                alt="Javascript Logo"
                height={35}
                width={35}
              />
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={Typescript_Logo}
                alt="Typescript Logo"
                height={35}
                width={35}
              />
              <p>Typescript</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={Bootstrap_Logo}
                alt="Bootstrap Logo"
                height={35}
                width={35}
              />
              <p>Bootstrap</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={ReactJS_Logo}
                alt="React Javascript Logo"
                height={35}
                width={35}
              />
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={NodeJS_Logo}
                alt="Node.js Logo"
                height={35}
                width={35}
              />
              <p>Node.js</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Flask_Logo} alt="Flask Logo" height={35} width={35} />
              <p>Flask</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={PostgreSQL_Logo}
                alt="PostgreSQL Logo"
                height={35}
                width={35}
              />
              <p>PostgreSQL</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={REST_API_Logo}
                alt="REST API Logo"
                height={35}
                width={35}
              />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img
                src={Postman_Logo}
                alt="Postman Logo"
                height={35}
                width={35}
              />
              <p>Postman</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Git_Logo} alt="Git Logo" height={35} width={35} />
              <p>Git</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Github_Logo} alt="Github Logo" height={35} width={35} />
              <p>Github</p>
            </div>
          </li>
          <li>
            <div className="skills-container-item">
              <img src={Trello_Logo} alt="Trello Logo" height={35} width={35} />
              <p>Trello</p>
            </div>
          </li>
        </ul>
        <p className="skills-p">...and learning more everyday!</p>
      </div>
    </section>
  );
};

export default Skills;
