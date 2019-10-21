import React from 'react';

const Conversation = ({conversation, currentUser}) => {
    
    const renderMessages = messages => messages.map(message => {
        return (
            <div key={message.id} className={message.user.id === currentUser.id ? "message user" : "message"}>
                <span>User: {message.user.username}</span>
                <p>{message.content}</p>
            </div>
        )
    })
    
    return conversation ? (
        <div className="flex-item-1">
            <h2>{conversation.name}</h2>
            <div>
                {renderMessages(conversation.messages)}
            </div>
        </div>
    ) :
    (
        <div className="empty-channel">No channel selected</div>
    )
}

export default Conversation;
