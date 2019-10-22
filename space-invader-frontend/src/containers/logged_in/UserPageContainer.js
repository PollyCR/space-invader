import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import ChatContainer from "./ChatContainer";
import { Grid } from "semantic-ui-react";
import BackendAdapter from "../../adapters/BackendAdapter";

export class UserPageContainer extends Component {
  componentDidMount() {
    BackendAdapter.validateUser().then(user => {
      if (!user.id) this.props.history.push('/login')
    })
  }
  

  render() {
    return (
      <div>
        {this.props.user ? <h1>Welcome, {this.props.user.username}</h1> :<h1>Welcome!</h1>}
        <Grid padded>
          <Grid.Column width={10}>
            <DashboardContainer />
          </Grid.Column>
          <Grid.Column width={6} className="chat-container">
            <ChatContainer user={this.props.user} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UserPageContainer;
