/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}

          <div>
            <input type="checkbox" className="checkbox" id="light-dark-theme" />
            <label className="label" htmlFor="light-dark-theme">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>

          {
            //             const light_dark_theme = document.getElementById("light-dark-theme");
            // light_dark_theme.addEventListener("change", () => {
            //   document.body.classList.toggle("dark");
            // });
          }

          <button
            className="navbar-toggler"
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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-me">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}


export default Navbar;