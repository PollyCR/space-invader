import React from "react";

const Asteroid = props => {

  if (props.asteroid) {
    return <div>{props.asteroid.name}</div>;
  } else {
    return "Loading...";
  }
};

export default Asteroid;
