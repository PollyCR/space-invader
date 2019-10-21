import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({chatrooms, handleReceivedMessage}) => {
    return (
        <>
            {
                chatrooms.map(room => {
                    return (
                        <ActionCableConsumer 
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
