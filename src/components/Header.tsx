import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header-container-1 s-1">
      <div className="header-container-2">
        <img
          src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1645397697/IMG_2_v5ieug.jpg"
          className="header-img"
          alt="Bola Ghaly wearing a suit"
        />
        <div className="home-subcontainer">
          <h1 className="home-title">Hey! I'm Bola Ghaly</h1>
          <h2 className="home-subtitle">Based in NYC</h2>
          <h3 className="typewritter-text">
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
          </h3>
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
                href="https://linkedin.com/in/bolaghaly"
                target="_blank"
                rel="noreferrer"
                className="fab fa-linkedin"
              >
                <span>Bola Ghaly's Linkedin Profile</span>
              </a>
            </button>
            <button className="header-github-button">
              <a
                href="https://github.com/BolaGhaly"
                target="_blank"
                rel="noreferrer"
                className="fab fa-github"
              >
                <span>Bola Ghaly's GitHub Profile</span>
              </a>
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
          <span className="mouse_scroll_alt_text">Scroll Down Button</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
