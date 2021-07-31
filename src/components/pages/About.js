import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/Profile.jpg";
import resume from "../../assets/mikes-resume.pdf";

function AboutMe() {
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
                <Link to="/portfolio" className="nav-link">
                  Portfolio <i className="fa fa-book header-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About <i className="fa fa-user header-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container">
        <section className="row section-row">
          <div className="col-md-3">
            <h2>About Me</h2>
            <img
              className="bio-image img-fluid"
              src={profilePic}
              alt="A picture of me."
              id="bio-image"
            />
          </div>
          <div className="col-md-9">
            <p>
              I’m a former x-ray technician and current full time optometry
              technician and medical assistant. I’ve been wanting to change
              fields for many years now and I finally built up the courage to
              become a future web developer.
            </p>
            <p>
              At the moment I know a bit of HTML, CSS, javascript, Node.js, OOP,
              Express, Mysql, ORM and MVC. I'm currently learning Jquery and
              Bootstrap. I know that I just started out but I plan on learning
              as many skills as possible to fulfill my goal of being a web
              developer.
            </p>
            <p>
              You can see the many works I've done in the Portfolio located on
              this page, and am excited to connect with you through the
              multitude of channels by which I can be contacted.
            </p>
          </div>
        </section>
        <section className="row bottom-row">
          <div className="col-md-7 section-row">
            <div className="row-contact-header">
              <h2>Contact Me</h2>
            </div>
            <div className="row">
              <p className="contact-text">
                I would love to hear from you! I thrive on connection, and am
                always on the lookout for opportunities to network and
                collaborate. Feel free to reach out using any of the resources
                below, as well as find out a bit more about me professionally.
              </p>
            </div>
            <div className="row contact-list ">
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-home contact-icon left-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                    href="https://www.sandiego.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    San Diego, CA, USA
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-envelope contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a href="mailto:martinez.michael02@gmail.com">E-mail</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-phone-square contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a href="#" target="_blank">
                    760.681.8616
                  </a>
                </div>
              </div>
            </div>
            <div className="row contact-list">
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-linkedin-square left-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                    href="https://www.linkedin.com/in/michael-martinez-0863591b8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-github contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                    href="https://github.com/Statikman619"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-black-tie contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a href={resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </section>
      </main>
    </div>
  );
}

export default AboutMe;
