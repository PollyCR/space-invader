import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import ChatContainer from "./ChatContainer";
import { Grid,Container } from "semantic-ui-react";

export class UserPageContainer extends Component {
  render() {
    return (
      <div>
        <Container><Grid>
          <Grid.Column width = {8} >
            <DashboardContainer />
          </Grid.Column>
          <Grid.Column width = {8} >
            <ChatContainer />
          </Grid.Column>
        </Grid></Container>
      </div>
    );
  }
}

export default UserPageContainer;
