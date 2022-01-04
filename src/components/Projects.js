import React from "react";
import ProjectOneImage from "../assets/Avatar-Maker.svg";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="text-center">Projects</h2>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-interval="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Card title 1</h5>
                <p className="card-text">Technologies Used:</p>
                <a href="#" className="pe-4">
                  Live
                </a>
                <a href="#">Repo</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Card title 2</h5>
                <p className="card-text">Technologies Used:</p>
                <a href="#" className="pe-4">
                  Live
                </a>
                <a href="#">Repo</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Card title 3</h5>
                <p className="card-text">Technologies Used:</p>
                <a href="#" className="pe-4">
                  Live
                </a>
                <a href="#">Repo</a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
