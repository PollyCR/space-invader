import React, {useState} from 'react';
import { Button, Form } from "semantic-ui-react";
import BackendAdapter from '../adapters/BackendAdapter';

const Channels = ({channels, handleClick}) => {
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
        BackendAdapter.postChatroom(data)
    }

    return (
        <>
            <h1>Channels</h1>
            <Button onClick={() => setNewChannelDisplay(!newChannelDisplay)}>{newChannelDisplay ? '-' : '+'}</Button>
            {
                newChannelDisplay ?
                (
                    <Form onSubmit={handleSubmit}>
                        <input type="text" placeholder="new channel name" value={newChannelName} onChange={e => setNewChannelName(e.target.value)}/>
                        <textarea placeholder="description" value={newChannelDesc} onChange={e => setNewChannelDesc(e.target.value)}/>
                        <Button type='submit'>Submit</Button>        
                    </Form>
                ) :
                null
            }
            <ul>
                {channels ? channels.map(channel => <li key={channel.id} onClick={() => handleClick(channel.id)}>{channel.name}</li>) : null}
            </ul>
        </>
    );
}

export default Channels;
