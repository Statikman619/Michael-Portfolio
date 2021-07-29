import React from "react";

// This renders the thumbnail image for each project that will in turn launch the modal
function DemoThumbnail(props) {
  return (
    <div>
      <img
        className="demo-thumbnail"
        src={props.thumbnail}
        alt={props.name}
        onClick={props.toggle}
      />
    </div>
  );
}

export default DemoThumbnail;
