import React from 'react';
var ActionCable = require('actioncable')

class Cable extends React.Component {
// ({chatrooms, handleReceivedMessage}) => 
    componentDidMount() {
        const { url, channel, onReceived, onConnected } = this.props

        const cable = ActionCable.createConsumer(url)

        cable.subscriptions.create(channel, {
            received: onReceived,
            connected: onConnected
        })
    }
    

    
    render() {

        return (
            <>
                
            </>
        );
    }
}

export default Cable;

/* {
    chatrooms.map(room => {
        return (
            <ActionCableConsumer 
                key={room.id}
                channel={{channel: "MessagesChannel", chatroom: room.id}}
                onReceived={handleReceivedMessage}
            />
        )
    })
} */