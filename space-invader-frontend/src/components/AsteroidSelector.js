import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

export class AsteroidSelector extends Component {

    getValues = () => {
       let asteroidOptions = this.props.asteroids.map(asteroid => ({value: asteroid.id, text: asteroid.name, key: asteroid.name}))
       return asteroidOptions
    }

    handleClick = (e, {value}) => {
        this.props.setSelectedAsteroid(value)
    }
  render() {
    return (
      // <Container>{this.asteroidOptions()}</Container>
      <Dropdown
        placeholder="Select an Asteroid"
        fluid
        selection
        options={this.getValues()}
        onChange = {this.handleClick}
      />
    );
  }
}

export default AsteroidSelector;
