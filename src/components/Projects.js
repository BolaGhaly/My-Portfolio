/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-cards-container">
        <div className="card project-cards">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644901764/Project_1_IMG_q0uzjv.png"
                className="project-images"
                alt="Postman Screenshot of Heroku Link's '/players_cards' route (GET Request)"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h5 className="project-title">
                  NYC Tech Talent Pipeline - Capstone Project
                </h5>
                <p className="my-text-muted">
                  Full Stack Web Development Bootcamp
                </p>
              </div>
              <div>
                <p className="card-text">
                  Technologies Used: Node.js, Express.js, PostgreSQL, REST APIs,
                  Postman, Heroku
                </p>
                <ul className="mt-3 project-lis">
                  <li className="mb-3">
                    Collaborated with a group to create an online loot box
                    simulator where a user can open different kinds of card
                    packs (Starter, All-Stars, and Hall of Famers) to get a
                    chance to own their favorite NBA player trading cards, using
                    an API endpoint.
                  </li>
                  <li className="mb-3">
                    Used Node.js and Express.js to create a server, deployed on
                    Heroku, that uses custom routes and HTTP messages allowing
                    data to be exchanged between client (front-end) and server
                    (back-end).
                  </li>
                  <li className="mb-3">
                    Utilized PostgreSQL database to store NBA player's
                    information that is used in the front-end for the players'
                    cards as an API endpoint and store the cards that the user
                    gets when they open a card pack so that it is retrieved from
                    the user's collection joint table and displayed in the "My
                    Collection" page on the front-end.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
        <div className="card project-cards mt-5">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644902357/Project_2_IMG_e9kkbi.png"
                className="project-images"
                alt="Screenshot of the website"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h5 className="project-title">
                  NYC Tech Talent Pipeline - Zip Code/City Search
                </h5>
                <p className="my-text-muted">
                  Full Stack Web Development Bootcamp
                </p>
              </div>
              <div>
                <p className="card-text">
                  Technologies Used: HTML, CSS, ReactJS, REST APIs, Postman,
                  Netlify
                </p>
                <ul className="mt-3 project-lis">
                  <li className="mb-3">
                    Built with HTML, CSS, and ReactJS to render a user-friendly,
                    interactive user interface (UI).
                  </li>
                  <li className="mb-3">
                    Utilized the React Router DOM npm package to implement
                    dynamic routing, display pages, and allow the user to
                    navigate them.
                  </li>
                  <li className="mb-3">
                    Used two APIs, provided by NYC Tech Talent Pipeline, to
                    return a JSON response with an array containing an object
                    for each city found if the user is seaching by zip code or
                    the zip codes found if the user is searching by the city.
                    Postman was used for testing the APIs before using them in
                    my web application by sending requests and examining the
                    responses received.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
        <div className="card project-cards mt-5">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1645333389/Project_3_IMG_mncmez.png"
                className="project-images"
                alt="Screenshot of the website"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h5 className="project-title">Discord Bot</h5>
                <p className="my-text-muted">Personal Project</p>
              </div>
              <div>
                <p className="card-text">
                  Technologies Used: Python, Flask, HTML, CSS, Replit, REST
                  APIs, Postman, UptimeRobot, Discord
                </p>
                <ul className="mt-3 project-lis">
                  <li className="mb-3">Testing 1</li>
                  <li className="mb-3">Testing 2</li>
                  <li className="mb-3">Testing 3</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
