import React from "react";

function DemoContent(props) {
  // Creating static properties for an stills element or img element depending on the format of the demo content
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

  // Determining whether or not to display an screenshot or img tag for the demoed project
  let thingToDisplay;

  if (props.project.demoType === "stills") {
    thingToDisplay = stills;
  } else {
    thingToDisplay = img;
  }

  return (
    // inline style rule determining when the modal opens and closes
    <div className="demo-window" style={{ display: props.display }}>
      <button className="btn-link close">
        {/* function to close the modal is passed as a prop below */}
        <i className="fa fa-window-close" onClick={props.toggle}></i>
      </button>
      <div className="demo-content">{thingToDisplay}</div>
    </div>
  );
}

export default DemoContent;
