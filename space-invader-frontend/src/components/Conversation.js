import React from 'react';
import ScrollToBottom, {  } from "react-scroll-to-bottom";

const Conversation = ({conversation, currentUser}) => {
    
    const renderMessages = messages => messages.map(message => {
        return (
            <div key={message.id} className={message.user.user_id === currentUser.id ? "message user" : "message"}>
                <span>User: {message.user.username}</span>
                <p>{message.content}</p>
            </div>
        )
    })


    
    return conversation ? (
        <div className="flex-item-1">
            <h2>{conversation.name}</h2>
            <ScrollToBottom className="messages-container">
                {renderMessages(conversation.messages)}
            </ScrollToBottom>
        </div>
    ) :
    (
        <div className="empty-channel"><span>No channel selected</span></div>
    )
}

export default Conversation;
