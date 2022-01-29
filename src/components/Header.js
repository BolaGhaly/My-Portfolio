import React from "react";
import Image from "../assets/Avatar-MakerSVG.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Image} alt="my avatar" />
      <div className="d-flex justify-content-center flex-column ps-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique vitae ratione nulla eos, harum provident? Exercitationem
          nihil aut tempore, voluptas quas et.
        </p>
        <div className="d-flex header-buttons">
          <button className="header-resume-button">
            <a href="/TASKS - DELETE BEFORE UPLOAD" download>
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
