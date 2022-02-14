/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="d-flex justify-content-center flex-column ps-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique vitae ratione nulla eos, harum provident? Exercitationem
          nihil aut tempore, voluptas quas et.
        </p>
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
