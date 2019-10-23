import React from "react";
import { Image, Grid, Placeholder } from "semantic-ui-react";

const Asteroid = props => {
  if (props.asteroid) {
    return (
      <Grid padded className="asteroid-diagram">
        <Grid.Row>
          {props.asteroid.name} is currently{" "}
          {
            props.asteroid.close_approach_data[0].miss_distance.kilometers.split(
              "."
            )[0]
          }{" "}
          kilometres from Earth.
        </Grid.Row>
        <Grid.Row>
          <Image
            className="asteroid-image"
            src={require("../images/asteroid.png")}
            size="tiny"
          />
          <Image
            className="asteroid-arrow"
            src={require("../images/arrow.gif")}
            size="tiny"
          />
          <Image className = "Earth" src={require("../images/earth.png")} size="tiny" />
        </Grid.Row>
      </Grid>
    );
  } else {
    return <Placeholder />;
  }
};

export default Asteroid;
