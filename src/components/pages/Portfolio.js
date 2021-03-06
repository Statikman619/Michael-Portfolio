import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectMain from "../ProjectMain";
import DemoContent from "../DemoContent";
import resume from "../../assets/Resume.pdf";
import Projects from "../../project";

function Portfolio() {
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
    portfolioIndex === Projects.length - 1
      ? setPortfolioIndex(0)
      : setPortfolioIndex(portfolioIndex + 1);
  }

  // Toggles to the previous project in the portfolio
  function manageToggleLeft() {
    portfolioIndex === 0
      ? setPortfolioIndex(Projects.length - 1)
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
              I can't wait to share my works with you. Please see below some of
              the selections of my work. Not all of my works were created by
              myself some of these works were created as a team. That's one of
              the great things about coding it could easily be a team effort. If
              you would like to talk with me about any of these projects
              further, feel free to reach out. Email is the best way to get a
              hold of me(martinez.michael02@gmail.com) but there's multiple ways
              of getting in touch with me just look below!
            </p>
            <p>
              <a
                className="resume-link"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Click here to download my resume.
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
              Ever since I was a kid i've loved computers and all the amazing
              things that could be done with just a simple click of a button.
              You can create something that people interact with, use, touch and
              work with. That is one of the greatest feelings you can have when
              you finish a project. With coding if you think it you can do it. I
              always strive to produce the best possible product that I can. It
              may not always be the best but everyday I strive to get better.
            </p>
          </div>
        </section>

        <section className="row">
          {portfolioIndex}
          <div className="col-md-4"></div>
          <div className="col-md-4 section-row toggle-row">
            <div className="toggle-subrow">
              <button
                type="button"
                style={{ display: "inline-block" }}
                className="btn btn-link toggle-btn"
                onClick={() => manageToggleLeft()}
              >
                <i className="fa fa-chevron-left i-toggle"></i>
              </button>
              <h3 className="toggle-text" style={{ display: "inline-block" }}>
                Toggle Projects
              </h3>
              <button
                type="button"
                style={{ display: "inline-block" }}
                className="btn btn-link"
                onClick={() => manageToggleRight()}
              >
                <i className="fa fa-chevron-right i-toggle"></i>
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </section>

        {/* Passing the props from the projects object into the modal window that shows the demo */}
        <DemoContent
          project={Projects[portfolioIndex]}
          name={Projects[portfolioIndex].name}
          toggle={toggleModal}
          display={modalDisplay}
          content={Projects[portfolioIndex].demoContent}
        />
      </main>
    </div>
  );
}

export default Portfolio;
