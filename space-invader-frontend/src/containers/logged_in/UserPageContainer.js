import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import ChatContainer from "./ChatContainer";
import { Grid, Button} from "semantic-ui-react";
import '../../UserPage.css'
import { Link } from 'react-router-dom'

export class UserPageContainer extends Component {
  
  

  render() {
    return (
      <div>
        <div id="title-bar">
          {this.props.user ? <h1 className="main-title">Welcome, {this.props.user.username}</h1> :<h1 className="main-title">Welcome!</h1>}
          {this.props.user ? <Link to="/logout"><Button>Logout</Button></Link> : null}
        </div>
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
