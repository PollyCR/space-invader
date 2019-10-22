import React from "react";
import { Image, Grid, Placeholder } from "semantic-ui-react";


const Asteroid = props => {
  if (props.asteroid) {
    return (
        <Grid padded className = "asteroid-diagram">
          <Grid.Row>{props.asteroid.name} is currently {props.asteroid.close_approach_data[0].miss_distance.kilometers.split(".")[0]} kilometres from Earth.</Grid.Row>
          <Grid.Column width = {4}><Image className = "asteroid-image" src = {require("../images/asteroid.png")}/></Grid.Column>
          <Grid.Column className = "asteroid-distance" width = {6}><Image className = "asteroid-diagram" src = {require("../images/arrow.gif")}/></Grid.Column>
          <Grid.Column width = {6}><Image src = {require("../images/earth.png")}/></Grid.Column>
        </Grid>
    );
  } else {
    return <Placeholder />
  }
};

export default Asteroid;
