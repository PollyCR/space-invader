import React, {useState} from "react";
import { Form, Button } from "semantic-ui-react";
import BackendAdapter from "../adapters/BackendAdapter";

const MessageForm = ({user, selectedChannel}) => {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const data = {
      user_id: user.id,
      chatroom_id: selectedChannel.id,
      content: message
    }
    setMessage('')
    BackendAdapter.postMessage(data)
  }

  return (
    <div className="flex-item-2">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Message goes here</label>
          <input placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
          <Button type='submit'>Send</Button>        
        </Form.Field>
      </Form>
    </div>
  );
};

export default MessageForm;
