import React from "react";
import { Image, Segment, Grid, Reveal } from "semantic-ui-react";
import BackendAdapter from "../adapters/BackendAdapter";
import "../App.css"


class APOD extends React.Component {
  state = {
    apod: []
  };

  componentDidMount() {
    this.renderPhoto();
  }

  renderPhoto = () => {
    fetch(BackendAdapter.APOD_URL)
      .then(resp => resp.json())
      .then(photo => this.setState({ apod: photo }));
  };

  render() {
    return (
      <Reveal  animated="fade">
        <Reveal.Content
          visible
          style={{ height: "100%", width: "100%", background: "black" }}
        >
          <Grid stretched>
            <Grid.Column>
          <Image
            src={this.state.apod.url}
            as='a'
            href={this.state.apod.url}
            target = "_blank"
            alt="Picture of the day"
            className="APOD"
          />
          </Grid.Column></Grid>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Segment className="photo_text">
            {this.state.apod.explanation}
          </Segment>
        </Reveal.Content>
      </Reveal>
    );
  }
}

export default APOD;
