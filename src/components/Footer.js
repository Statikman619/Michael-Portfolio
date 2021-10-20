import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container" id="footerBar">
        <section className="row section-row">
          {/* <ul className="navbar-nav d-flex align-items-end footer-nav"> */}
          <ul className="d-flex align-items-end footer-nav">
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
                href="https://github.com/Statikman619/Michael-Portfolio"
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
        </section>
      </div>
    </footer>
  );
}

export default Footer;
