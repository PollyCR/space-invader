import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import ChatContainer from "./ChatContainer";
import { Grid,Container } from "semantic-ui-react";

export class UserPageContainer extends Component {
  render() {
    return (
      <div>
        <Container><Grid>
          <Grid.Row >
            <DashboardContainer />
          </Grid.Row>
          <Grid.Row>
            <ChatContainer />
          </Grid.Row>
        </Grid></Container>
      </div>
    );
  }
}

export default UserPageContainer;
