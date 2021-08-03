import React from "react";
import DemoThumbnail from "./DemoThumbnail";

function DemoContent(props) {
  // Creating static properties for an stills element or img element depending on the format of the demo content
  console.log(props);
  const stills = (
    <stills
      width="768"
      height="432"
      title={props.name}
      src={props.content}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></stills>
  );
  const img = (
    <img src={props.content} height="100%" width="100%" alt={props.name}></img>
  );

  const { project } = props;

  // Determining whether or not to display an screenshot or img tag for the demoed project
  let thingToDisplay;

  if (props.project.demoType === "stills") {
    thingToDisplay = stills;
  } else {
    thingToDisplay = img;
  }

  return (
    // inline style rule determining when the modal opens and closes
    // <div className="demo-window">
    //   <button className="btn-link close">
    //     {/* function to close the modal is passed as a prop below */}
    //     <i className="fa fa-window-close" onClick={props.toggle}></i>
    //   </button>
    //   <div className="demo-content">{thingToDisplay}</div>
    <section className="row section-row bottom-row">
      <div className="col-md-3 col-folio">
        <h3>
          <strong>{project.name}</strong>
        </h3>
        <p>
          <strong>Project Links</strong>
          {/* Rendering each project link within the ProjectLinks component */}
          {/* {props.links.map((link) => {
              return <ProjectLinks link={link} />;
            })} */}
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
    // </div>
  );
}

export default DemoContent;
