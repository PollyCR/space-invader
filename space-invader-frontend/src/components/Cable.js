import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({chatrooms, handleReceivedMessage}) => {
    return (
        <>
            {
                chatrooms.map(room => {
                    return (
                        <ActionCable 
                            key={room.id}
                            channel={{channel: "MessagesChannel", chatroom: room.id}}
                            onReceived={handleReceivedMessage}
                        />
                    )
                })
            }
        </>
    );
}

export default Cable;
