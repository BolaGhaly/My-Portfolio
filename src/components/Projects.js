/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="text-center">Projects</h2>
      <div className="project-cards-container">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <h5 className="card-title text-center">Card title 1</h5>
          <div className="ms-5">
            <p className="card-text">Technologies Used:</p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <a href="#" className="project-live-text">
              Live
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github project-github-logo"
            ></a>
          </div>
        </div>
        <div className="card mt-5">
          <img src="..." className="card-img-top" alt="..." />
          <h5 className="card-title text-center">Card title 2</h5>
          <div className="ms-5">
            <p className="card-text">Technologies Used:</p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <a href="#" className="project-live-text ">
              Live
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github project-github-logo"
            ></a>
          </div>
        </div>
        <div className="card mt-5">
          <img src="..." className="card-img-top" alt="..." />
          <h5 className="card-title text-center">Card title 3</h5>
          <div className="ms-5">
            <p className="card-text">Technologies Used:</p>
            <ul className="mt-3">
              <li>Testing 1</li>
              <li>Testing 2</li>
              <li>Testing 3</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3 w-100">
            <a href="#" className="project-live-text ">
              Live
            </a>
            <a
              href="#"
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
