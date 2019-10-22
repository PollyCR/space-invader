import React from "react";
import { Image, Segment, Grid, Reveal } from "semantic-ui-react";

class APOD extends React.Component {
  state = {
    apod: []
  };

  componentDidMount() {
    this.renderPhoto();
  }

  renderPhoto = () => {
    fetch("https://s-i-backend.herokuapp.com/api/APOD")
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
            src={this.state.apod.hdurl}
            as='a'
            href={this.state.apod.hdurl}
            target = "_blank"
            alt="Picture of the day"

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
