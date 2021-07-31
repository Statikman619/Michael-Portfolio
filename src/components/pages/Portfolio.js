import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ProjectLinks from "../../ProjectLinks";
import ProjectMain from "../ProjectMain";
import DemoContent from "../DemoContent";
import resume from "../../assets/mikes-resume.pdf";
import PortfolioImage from "../../assets/PortfolioImage.png";

function Portfolio() {
  console.log(PortfolioImage);
  // This state determines which index of the Object in "projects" is displayed on the portfolio
  const projects = [
    {
      name: "Michael Martinez",
      links: "https://github.com/Statikman619/Michael-Portfolio",
      skills: "React, HTML, JS and CSS",
      thumbnail: PortfolioImage,
      summary: "My new portfolio powered by React",
      details: "My portfolio",
    },
  ];
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  // This state determines the display property of the pop-up modal that shows the demo gif/video
  const [modalDisplay, setModalDisplay] = useState("none");

  // Handling the state change of the modal to either display or be hidden
  function toggleModal() {
    modalDisplay === "none"
      ? setModalDisplay("block")
      : setModalDisplay("none");
  }

  // Toggles to the next project in the portfolio
  function manageToggleRight() {
    portfolioIndex === projects.length - 1
      ? setPortfolioIndex(0)
      : setPortfolioIndex(portfolioIndex + 1);
  }

  // Toggles to the previous project in the portfolio
  function manageToggleLeft() {
    portfolioIndex === 0
      ? setPortfolioIndex(projects.length - 1)
      : setPortfolioIndex(portfolioIndex - 1);
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
          <h1 className="navbar-brand">Michael Martinez</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link active">
                  Portfolio <i className="fa fa-book header-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About <i className="fa fa-user header-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="row section-row">
          <div className="col-md-2">
            <h2>Portfolio</h2>
          </div>
          <div className="col-md-5">
            <p>
              I can't wait to share my works with you. Please see below some the
              selections of my work. If you like to talk about any of these
              further, feel free to reach out using one of the multiple ways of
              getting in touch!
            </p>
            <p>
              <a
                className="resume-link"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Click here to view my resume.
              </a>
            </p>
            <p>
              <a
                className="resume-link"
                href="mailto: martinez.michael02@gmail.com"
              >
                E-mail me at martinez.michael02@gmail.com.
              </a>
            </p>
          </div>
          <div className="col-md-5">
            <p>
              I strive to produce the best possible product that I can. It may
              not always be the best but just know that I gave it my all.
            </p>
          </div>
        </section>

        <section className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 section-row toggle-row">
            <div className="row toggle-subrow">
              <button
                type="button"
                className="btn btn-link toggle-btn"
                onClick={() => manageToggleLeft()}
              >
                <i className="fa fa-chevron-left i-toggle"></i>
              </button>
              <h3 className="toggle-text">Toggle Projects</h3>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => manageToggleRight()}
              >
                <i className="fa fa-chevron-right i-toggle"></i>
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </section>

        {/* Passing the props from the projects object into the main project component */}
        <ProjectMain
          projects={projects}
          // projects={projects[portfolioIndex]}
          // name={projects[portfolioIndex].name}
          // links={projects[portfolioIndex].projectLinks}
          // skills={projects[portfolioIndex].skillsUsed}
          // thumbnail={projects[portfolioIndex].demoThumbnail}
          // summary={projects[portfolioIndex].summary}
          // details={projects[portfolioIndex].details}
          toggle={toggleModal}
        />

        {/* Passing the props from the projects object into the modal window that shows the demo */}
        <DemoContent
          project={projects[portfolioIndex]}
          name={projects[portfolioIndex].name}
          toggle={toggleModal}
          display={modalDisplay}
          content={projects[portfolioIndex].demoContent}
        />
      </main>
    </div>
  );
}

export default Portfolio;
