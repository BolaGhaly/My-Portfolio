import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";
import GA_Event from "./GA_Event";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    GA_Event(
      "Navbar - hMenu",
      "Navbar hMenu Button Clicked",
      "Navbar hMenu Button"
    );
  };

  const closeMenu = (category: string, action: string, label: string) => {
    setNavbarOpen(false);
    GA_Event(category, action, label);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top">
      <div className="container-fluid">
        <h1 className="navbar-brand highlight">BG</h1>
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
              navbarOpen ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#home"
                onClick={() =>
                  closeMenu(
                    "Navbar - links",
                    "Navbar home Clicked",
                    "Navbar home"
                  )
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#about"
                onClick={() =>
                  closeMenu(
                    "Navbar - links",
                    "Navbar about Clicked",
                    "Navbar about"
                  )
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#skills"
                onClick={() =>
                  closeMenu(
                    "Navbar - links",
                    "Navbar skills Clicked",
                    "Navbar skills"
                  )
                }
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#projects"
                onClick={() =>
                  closeMenu(
                    "Navbar - links",
                    "Navbar projects Clicked",
                    "Navbar projects"
                  )
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#contact-me"
                onClick={() =>
                  closeMenu(
                    "Navbar - links",
                    "Navbar contact-me Clicked",
                    "Navbar contact-me"
                  )
                }
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
