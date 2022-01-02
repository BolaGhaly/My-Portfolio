import React from "react";

const Navbar = () => {
  return (
    <nav collapseOnSelect className="navbar navbar-expand-md sticky-top">
      <div className="container-fluid">
        <h1 className="navbar-brand">BG</h1>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#contact-me"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
