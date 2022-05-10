/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header-container-1 s-1">
      <div className="header-container-2">
        <img
          src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1645397697/IMG_2_v5ieug.jpg"
          alt="My Image"
          className="header-img"
        />
        <div className="header-container-subcontainer">
          <h1 className="header-h1-title">Hey! I'm Bola Ghaly</h1>
          <h5 className="header-h1-subtitle">Based in NYC</h5>
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
                  "Team Player",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                skipAddStyles: true,
              }}
            />
          </h4>
          <div className="header-buttons">
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
      <div className="mouse_scroll">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows one_m"></span>
            <span className="m_scroll_arrows two_m"></span>
            <span className="m_scroll_arrows three_m"></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
