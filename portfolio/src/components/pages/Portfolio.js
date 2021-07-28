import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../projects";
import ProjectMain from "../ProjectMain";
import DemoContent from "../DemoContent";
import resume from "../../assets/resume";

function Portfolio() {
  // This state determines which index of the Object in "projects" is displayed on the portfolio
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