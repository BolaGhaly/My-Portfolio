import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-cards-container">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div>
            <h5 className="card-title">
              NYC Tech Talent Pipeline - Capstone Project
            </h5>
            <p className="text-muted">Full Stack Web Development Bootcamp </p>
          </div>
          <div className="ms-5">
            <p className="card-text">
              Technologies Used: Node.js, Express.js, PostgreSQL, APIs, Postman,
              Heroku
            </p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <a
              href="https://ttp-capstone-project-backend.herokuapp.com/"
              className="project-live-text"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/TTP-Capstone-Project-Backend"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github project-github-logo"
            ></a>
          </div>
        </div>
        <div className="card mt-5">
          <img src="..." className="card-img-top" alt="..." />
          <h5 className="card-title">
            NYC Tech Talent Pipeline - Zip Code/City Search
          </h5>
          <p className="text-muted">Full Stack Web Development Bootcamp </p>

          <div className="ms-5">
            <p className="card-text">
              Technologies Used: HTML, CSS, ReactJS, APIs, Postman, Netlify
            </p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3 w-100">
            <a
              href="https://city-or-zip-code-search.netlify.app/"
              className="project-live-text"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/TTP-Assignment-6"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github project-github-logo"
            ></a>
          </div>
        </div>
        <div className="card mt-5">
          <img src="..." className="card-img-top" alt="..." />
          <h5 className="card-title">Discord Bot</h5>
          <div className="ms-5">
            <p className="card-text">
              Technologies Used: Python, Flask, HTML, CSS, Replit, APIs,
              Postman, UptimeRobot, Discord
            </p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <a
              href="https://Discord-Bot-Python.bolaghaly.repl.co"
              className="project-live-text"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/Discord-Bot-Python"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github project-github-logo"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
