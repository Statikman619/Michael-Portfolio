import React from "react";
import DemoThumbnail from "./DemoThumbnail";
import ProjectLinks from "./ProjectLinks";

function ProjectMain(props) {
  return (
    <div>
      <section className="row section-row bottom-row">
        <div className="col-md-3 col-folio">
          <h3>
            <strong>{props.name}</strong>
          </h3>
          <p>
            <strong>Project Links</strong>
            {/* Rendering each project link within the ProjectLinks component */}
            {props.links.map((link) => {
              return <ProjectLinks link={link} />;
            })}
          </p>
          <p>
            <strong>Skills Used |</strong> {props.skills}
          </p>