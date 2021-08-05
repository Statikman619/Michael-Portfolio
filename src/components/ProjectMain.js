import React from "react";
import DemoThumbnail from "./DemoThumbnail";
import ProjectLinks from "./ProjectLinks";

function ProjectMain(props) {
  return (
    <div>
      {props.projects.map((project) => {
        return (
          <section className="row section-row bottom-row">
            <div className="col-md-3 col-folio">
              <h3>
                <strong>{project.name}</strong>
              </h3>
              <p>
                <ProjectLinks link={project.link} />
                {/* Rendering each project link within the ProjectLinks component */}
              </p>
              <p>
                <strong>Skills Used |</strong> {project.skills}
              </p>

              <p>
                <strong>Demos (click to enlarge)</strong>
              </p>

              <DemoThumbnail
                thumbnail={project.thumbnail}
                name={project.name}
                // toggle={project.toggle}
              />
            </div>
            <div className="col-md-4">
              <h3>Project Summary</h3>
              <p>{project.summary}</p>
            </div>
            <div className="col-md-5">
              <h3>Project Details</h3>
              <p>{project.details}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProjectMain;
