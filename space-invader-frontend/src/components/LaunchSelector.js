import React, { Component } from "react";
import { Container, Dropdown } from "semantic-ui-react";

export class LaunchSelector extends Component {

    getValues = () => {
       let launchOptions = this.props.launches.map(launch => ({value: launch.id, text: launch.name, key: launch.name}))
       return launchOptions
    }

    handleClick = (e, {value}) => {
        this.props.setSelectedLaunch(value)
    }
  render() {
    return (
      // <Container>{this.launchOptions()}</Container>
      <Dropdown
        placeholder="Select from upcoming Launches"
        fluid
        selection
        options={this.getValues()}
        onChange = {this.handleClick}
      />
    );
  }
}

export default LaunchSelector;
