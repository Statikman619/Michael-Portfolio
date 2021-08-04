import React, { useState } from "react";
import About from "./components/pages/About";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div>
      <div className="sd-photo"></div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>
      <footer>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#footerBar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon footer-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="footerBar"
        >
          <ul className="navbar-nav d-flex align-items-end footer-nav">
            <li className="nav-item active">
              <h4>Michael Martinez | 2021 |</h4>
            </li>
            <li className="nav-item active">
              <a
                href="#"
                target="_blank"
                className="btn btn-sm"
                role="button"
                aria-pressed="true"
                rel="noopener noreferrer"
              >
                <i className="fa fa-user"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Statikman619/Portfolio"
                target="_blank"
                className="btn btn-sm active"
                role="button"
                aria-pressed="true"
                rel="noopener noreferrer"
              >
                <i className="fa fa-book"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="comingSoon"
                target="_blank"
                className="btn btn-sm"
                role="button"
                aria-pressed="true"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope-o e-mail-button"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/michael-martinez-0863591b8/"
                target="_blank"
                className="btn btn-sm"
                role="button"
                aria-pressed="true"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Statikman619"
                target="_blank"
                className="btn btn-sm"
                role="button"
                aria-pressed="true"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
