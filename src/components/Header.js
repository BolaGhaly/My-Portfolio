/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header-container">
      <div className="d-flex justify-content-center flex-column ps-3">
        <h1>Hey! I'm Bola Ghaly</h1>
        <h5 className="my-text-muted">Based in NYC</h5>
        <h4 className="typewritter-text">
          <Typewriter
            options={{
              strings: [
                "College Student",
                "Front-end Developer",
                "Back-end Developer",
                "Full Stack Developer",
                "Passionate",
                "Problem Solver", 
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 100,
              skipAddStyles: true,
            }}
          />
        </h4>
        <div className="d-flex header-buttons">
          <button className="header-resume-button">
            <a
              title="resume"
              href="/Bola_Ghaly_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Resume - Bola Ghaly"
            >
              Resume
            </a>
          </button>
          <button className="header-linkedin-button">
            <a
              href="https://linkedin.com/in/bolaghaly63"
              target="_blank"
              rel="noreferrer"
              className="fab fa-linkedin"
            ></a>
          </button>
          <button className="header-github-button">
            <a
              href="https://github.com/BolaGhaly"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github"
            ></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
