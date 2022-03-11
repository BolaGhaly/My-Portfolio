/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top">
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
          onClick={handleToggle}
        >
          {navbarOpen ? (
            <VscClose className="menu-close-icon" />
          ) : (
            <FiMenu className="menu-open-icon" />
          )}
        </button>
        <div
          className={`${navbarOpen ? "" : "collapse"} navbar-collapse`}
          id="navbarNav"
        >
          <ul
            className={`navbar-nav ms-auto ${
              navbarOpen
                ? "animate__animated animate__fadeIn"
                : ""
            }`}
          >
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#"
                onClick={() => closeMenu()}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#about"
                onClick={() => closeMenu()}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#skills"
                onClick={() => closeMenu()}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#projects"
                onClick={() => closeMenu()}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#contact-me"
                onClick={() => closeMenu()}
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
