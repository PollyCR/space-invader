import React, { Component } from "react";
import { Container, Dropdown } from "semantic-ui-react";

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
        placeholder="Select from nearby Asteroids"
        fluid
        selection
        options={this.getValues()}
        onChange = {this.handleClick}
      />
    );
  }
}

export default AsteroidSelector;
