import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import ChatContainer from "./ChatContainer";
import { Grid } from "semantic-ui-react";

export class UserPageContainer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Grid padded>
          <Grid.Column width={10}>
            <DashboardContainer />
          </Grid.Column>
          <Grid.Column width={6}>
            <ChatContainer user={this.props.user} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UserPageContainer;
