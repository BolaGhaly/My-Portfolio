import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-cards-container">
        <div className="card">
          <img
            src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644901764/Project_1_IMG_q0uzjv.png"
            className="project-images"
            alt=""
          />
          <div className="project-title-container">
            <h5 className="project-title">
              NYC Tech Talent Pipeline - Capstone Project
            </h5>
            <p className="text-muted">Full Stack Web Development Bootcamp </p>
          </div>
          <div className="ms-5 me-3">
            <p className="card-text">
              Technologies Used: Node.js, Express.js, PostgreSQL, REST API,
              Postman, Heroku
            </p>
            <ul className="mt-3">
              <li className="mb-3">
                Collaborated with a group to create an online loot box simulator
                where a user can open different kinds of card packs (Starter,
                All-Stars, and Hall of Famers) to get a chance to own their
                favorite NBA player trading cards, using an API endpoint.
              </li>
              <li className="mb-3">
                Used Node.js and Express.js to create a server, deployed on
                Heroku, that uses custom routes and HTTP messages allowing data
                to be exchanged between client (front-end) and server
                (back-end).
              </li>
              <li className="mb-3">
                Utilized PostgreSQL database to store NBA player's information
                that is used in the front-end for the players' cards as an API
                endpoint and store the cards that the user gets when they open a
                card pack so that it is retrieved from the user's collection
                joint table and displayed in the "My Collection" page on the
                front-end.
              </li>
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
          <img
            src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644902357/Project_2_IMG_e9kkbi.png"
            className="card-img-top"
            alt=""
          />
          <div className="project-title-container">
            <h5 className="project-title">
              NYC Tech Talent Pipeline - Zip Code/City Search
            </h5>
            <p className="text-muted">Full Stack Web Development Bootcamp </p>
          </div>
          <div className="ms-5 me-3">
            <p className="card-text">
              Technologies Used: HTML, CSS, ReactJS, REST APIs, Postman, Netlify
            </p>
            <ul className="mt-3">
              <li className="mb-3">Testing 1</li>
              <li className="mb-3">Testing 2</li>
              <li className="mb-3">Testing 3</li>
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
          <img
            src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644901139/Project_3_IMG_ggc1yb.png"
            className="card-img-top"
            alt=""
          />
          <div className="project-title-container">
            <h5 className="project-title">Discord Bot</h5>
          </div>
          <div className="ms-5 me-3">
            <p className="card-text">
              Technologies Used: Python, Flask, HTML, CSS, Replit, REST APIs,
              Postman, UptimeRobot, Discord
            </p>
            <ul className="mt-3">
              <li className="mb-3">Testing 1</li>
              <li className="mb-3">Testing 2</li>
              <li className="mb-3">Testing 3</li>
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
