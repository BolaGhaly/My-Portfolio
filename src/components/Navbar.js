import React from "react";

const Navbar = () => {
  // const testingHome = () => {
  //   const navUl = document.getElementById("ul-nav-items");
  //   console.log("here home");
  //   console.log(navUl);
    
  // }

  // const testingAbout = () => {
  //   console.log("here about");
  // }

  //const navLinks = document.querySelectorAll(".nav-item");
  //const menuToggle = document.getElementById("navbarSupportedContent");
  // const bsCollapse = new bootstrap.Collapse(menuToggle);
  // navLinks.forEach((l) => {
  //   l.addEventListener("click", () => {
  //     bsCollapse.toggle();
  //   });
  // });
  //console.log(navLinks);
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="ul-nav-items">
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#"
                // onClick={testingHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="#about"
                // onClick={testingAbout}
              >
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
