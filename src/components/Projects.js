import React from "react";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-cards-container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
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
                <h5 className="card-title text-center">Card title 1</h5>
                <div className="ms-5">
                  <p className="card-text">Technologies Used:</p>
                  <ul className="mt-3">
                    <li>Testing 1</li>
                    <li>Testing 2</li>
                    <li>Testing 3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
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
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <div className="card">
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
          {/* <div className="card">
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
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
