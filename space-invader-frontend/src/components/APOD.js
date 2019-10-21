import React from "react";
import { Image, Segment, Reveal } from "semantic-ui-react";

class APOD extends React.Component {
  state = {
    apod: []
  };

  componentDidMount() {
    this.renderPhoto();
  }

  renderPhoto = () => {
    fetch("http://localhost:3000/api/APOD")
      .then(resp => resp.json())
      .then(photo => this.setState({ apod: photo }));
  };

  render() {
    return (
      <Reveal animated="fade">
        <Reveal.Content
          visible
          style={{ height: "100%", width: "100%", background: "black" }}
        >
          <Image
            src={this.state.apod.hdurl}
            as='a'
            href={this.state.apod.hdurl}
            alt="Picture of the day"
            size="huge"
          />
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
