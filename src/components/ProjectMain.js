import React from "react";
import DemoThumbnail from "./DemoThumbnail";
import ProjectLinks from "./ProjectLinks";

function ProjectMain(props) {
  console.log(props);
  return (
    <div>
    {props.projects.map((project)=>{
      return ()
    })}
      <section className="row section-row bottom-row">
        <div className="col-md-3 col-folio">
          <h3>
            <strong>{props.name}</strong>
          </h3>
          <p>
            <strong>Project Links</strong>
            {/* Rendering each project link within the ProjectLinks component */}
            {/* {props.links.map((link) => {
              return <ProjectLinks link={link} />;
            })} */}
          </p>
          <p>
            <strong>Skills Used |</strong> {props.skills}
          </p>

          <p>
            <strong>Demos (click to enlarge)</strong>
          </p>
          {/* Rendering each demo thumbnail.  This is something that was not necessary currently, but will be in the future so I set this as a map for reusability */}
          {/* {props.thumbnail.map((thumbnail) => {
            return (
              <DemoThumbnail
                thumbnail={thumbnail}
                name={props.name}
                toggle={props.toggle}
              />
            );
          })} */}
        </div>
        <div className="col-md-4">
          <h3>Project Summary</h3>
          <p>{props.summary}</p>
        </div>
        <div className="col-md-5">
          <h3>Project Details</h3>
          <p>{props.details}</p>
        </div>
      </section>
    </div>
  );
}

export default ProjectMain;
