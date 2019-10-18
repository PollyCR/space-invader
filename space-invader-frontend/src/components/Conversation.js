import React from 'react';

const Conversation = ({conversation}) => {
    
    const renderMessages = messages => messages.map(message => {
        return (
            <div>
                <span>User: {message.user.username}</span>
                <p>{message.content}</p>
            </div>
        )
    })
    
    return conversation ? (
        <div>
            <h2>{conversation.name}</h2>
            <div>
                {renderMessages(conversation.messages)}
            </div>
        </div>
    ) :
    (
        <div>No channel selected</div>
    )
}

export default Conversation;
