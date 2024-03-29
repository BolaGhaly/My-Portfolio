import { ImGithub } from "react-icons/im";
import GA_Event from "../utils/GA_Event";

const Projects = () => {
  return (
    <section className="projects-section s-4" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-cards-container">
        {/* Card #1 */}
        <div className="card project-cards">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644901764/Project_1_IMG_q0uzjv.png"
                className="project-images"
                alt="Project #1 - Website Screenshot"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h3 className="project-title">
                  NYC Tech Talent Pipeline - Capstone Project
                </h3>
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
              onClick={() =>
                GA_Event(
                  "Projects - #1 Live",
                  "Projects - #1 Live Button Clicked",
                  "Projects - #1 Live Button"
                )
              }
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/TTP-Capstone-Project-Backend"
              target="_blank"
              rel="noreferrer"
              className="project-github-logo"
              onClick={() =>
                GA_Event(
                  "Projects - #1 GitHub",
                  "Projects - #1 GitHub Button Clicked",
                  "Projects - #1 GitHub Button"
                )
              }
            >
              <ImGithub />
              <span>Project's GitHub repository</span>
            </a>
          </div>
        </div>

        {/* Card #2 */}
        <div className="card project-cards mt-5">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1644902357/Project_2_IMG_e9kkbi.png"
                className="project-images"
                alt="Project #2 - Website Screenshot"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h3 className="project-title">
                  NYC Tech Talent Pipeline - Zip Code/City Search
                </h3>
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
                    my web application by sending HTTP requests and examining
                    the responses received.
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
              onClick={() =>
                GA_Event(
                  "Projects - #2 Live",
                  "Projects - #2 Live Button Clicked",
                  "Projects - #2 Live Button"
                )
              }
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/TTP-Assignment-6"
              target="_blank"
              rel="noreferrer"
              className="project-github-logo"
              onClick={() =>
                GA_Event(
                  "Projects - #2 GitHub",
                  "Projects - #2 GitHub Button Clicked",
                  "Projects - #2 GitHub Button"
                )
              }
            >
              <ImGithub />
              <span>Project's GitHub repository</span>
            </a>
          </div>
        </div>

        {/* Card #3 */}
        <div className="card project-cards mt-5">
          <div className="project-cards-container-div">
            <div className="project-images-div">
              <img
                src="https://res.cloudinary.com/dvlicmrxg/image/upload/v1645334300/Project_3_IMG_sef3gy.png"
                className="project-images"
                alt="Project #3 - Website Screenshot"
              />
            </div>
            <div className="project-text-div">
              <div className="project-title-container">
                <h3 className="project-title">Discord Bot</h3>
                <p className="my-text-muted">Personal Project</p>
              </div>
              <div>
                <p className="card-text">
                  Technologies Used: Python, Flask, HTML, CSS, Replit, REST
                  APIs, Postman, UptimeRobot, Discord
                </p>
                <ul className="mt-3 project-lis">
                  <li className="mb-3">
                    Used Replit to host and deploy a discord bot that was
                    created by using Python Flask web framework and REST APIs
                    found online, and Postman was used for testing the APIs
                    before using them in my web application by sending HTTP
                    requests and examining the responses received.
                  </li>
                  <li className="mb-3">
                    This discord bot is named WALL-E and it has 25+ fun,
                    entertaining, and interesting bot commands!
                  </li>
                  <li className="mb-3">
                    The website was built with simple HTML and CSS to render out
                    a user-friendly, interactive user interface (UI) and an
                    invite link for everyone to join and have fun!
                  </li>
                  <li className="mb-3">
                    UptimeRobot was used to ping my WALL-E bot server regularly
                    and to keep it alive and running in the discord server 24/7.
                  </li>
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
              onClick={() =>
                GA_Event(
                  "Projects - #3 Live",
                  "Projects - #3 Live Button Clicked",
                  "Projects - #3 Live Button"
                )
              }
            >
              Live
            </a>
            <a
              href="https://github.com/BolaGhaly/Discord-Bot-Python"
              target="_blank"
              rel="noreferrer"
              className="project-github-logo"
              onClick={() =>
                GA_Event(
                  "Projects - #3 GitHub",
                  "Projects - #3 GitHub Button Clicked",
                  "Projects - #3 GitHub Button"
                )
              }
            >
              <ImGithub />
              <span>Project's GitHub repository</span>
            </a>
          </div>
        </div>
        <p className="projects-p">
          ...and there are more projects on my github!
        </p>
      </div>
    </section>
  );
};

export default Projects;
