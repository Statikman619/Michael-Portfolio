import React from "react";

// This renders each project link for each item, usually a link to deployment and a repo link that lands at the readme.md
function ProjectLinks(props) {
  return (
    <div>
      <a href={props.link.url} target="_blank" rel="noreferrer">
        {" "}
        {props.link.type}
      </a>
    </div>
  );
}

export default ProjectLinks;
