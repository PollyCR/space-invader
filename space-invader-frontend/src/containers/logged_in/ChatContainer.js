import React from 'react';
import Channels from '../../components/Channels';
import Conversation from '../../components/Conversation';
import MessageForm from '../../components/MessageForm';
import {Grid} from 'semantic-ui-react'

const ChatContainer = () => {
    return (
        <div>
              <Grid>
      <Grid.Column width={8}>
      <Channels />
      </Grid.Column>
      <Grid.Column width={8}>
          <Grid.Row><Conversation /></Grid.Row>
          <Grid.Row><MessageForm /></Grid.Row>

      </Grid.Column>
      </Grid>

      
   
            
            
        </div>
    );
}

export default ChatContainer;
