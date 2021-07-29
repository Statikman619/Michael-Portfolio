import React from "react";

function DemoContent(props) {
  // Creating static properties for an iframe element or img element depending on the format of the demo content
  const iframe = (
    <iframe
      width="768"
      height="432"
      title={props.name}
      src={props.content}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
  const img = (
    <img src={props.content} height="100%" width="100%" alt={props.name}></img>
  );
