import React, {useState} from 'react';
import { Button, Form } from "semantic-ui-react";
import BackendAdapter from '../adapters/BackendAdapter';
import '../Chat.css'

const Channels = ({channels, handleClick, selectedChannel}) => {
    const [newChannelDisplay, setNewChannelDisplay] = useState(false);
    const [newChannelName, setNewChannelName] = useState('');
    const [newChannelDesc, setNewChannelDesc] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            name: newChannelName,
            description: newChannelDesc
        }
        setNewChannelDesc('')
        setNewChannelName('')
        setNewChannelDisplay(false)
        BackendAdapter.postChatroom(data)
    }

    const handleDeleteButtonClick = (e, channel) => {
        e.stopPropagation()
        BackendAdapter.deleteChatroom(channel.id)
    }

    return (
        <>
            <h1 className="chatrooms-title">Chat</h1>
            <Button className="add-chat-button" onClick={() => setNewChannelDisplay(!newChannelDisplay)}>{newChannelDisplay ? '-' : '+'}</Button>
            {
                newChannelDisplay ?
                (
                    <Form onSubmit={handleSubmit}>
                        <input className="add-chat-input" type="text" placeholder="Channel Name" value={newChannelName} onChange={e => setNewChannelName(e.target.value)}/>
                        <textarea placeholder="Description..." className="add-chat-input" value={newChannelDesc} onChange={e => setNewChannelDesc(e.target.value)}/>
                        <Button type='submit'>Submit</Button>        
                    </Form>
                ) :
                null
            }
            <ul className="channel-list">
                {channels ? channels.map(channel => <li key={channel.id} onClick={e => handleClick(channel.id)} className={selectedChannel === channel.id ? 'selected' : null}>{channel.name}<Button onClick={e => handleDeleteButtonClick(e, channel)} className="channel-del-btn">-</Button></li>) : null}
            </ul>
        </>
    );
}

export default Channels;
