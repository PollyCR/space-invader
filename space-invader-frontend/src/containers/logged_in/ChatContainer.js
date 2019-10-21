import React, {useState, useEffect} from "react";
import Channels from "../../components/Channels";
import Conversation from "../../components/Conversation";
import MessageForm from "../../components/MessageForm";
import { Grid } from "semantic-ui-react";
import Adapter from '../../adapters/BackendAdapter';
import '../../Chat.css'
import { ActionCableConsumer } from "react-actioncable-provider";
import Cable from "../../components/Cable";

const ChatContainer = ({user}) => {

    const [chatrooms, setChatrooms] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        Adapter.get(Adapter.CHATROOMS_URL).then(setChatrooms)
    }, [])

    const getChannelNames = chatrooms => chatrooms.map(room => ({id: room.id, name: room.name}))

    const getSelectedChannel = (chatrooms, selectedChannel) => chatrooms.find(room => room.id === selectedChannel)

    const handleReceivedChatroom = response => {
        console.log(response)
        const { chatroom } = response;
        setChatrooms([...chatrooms, chatroom]);
    };

    const handleReceivedMessage = response => {
        const {message} = response
        const chatroomsCopy = [...chatrooms]
        const chatroom = chatroomsCopy.find(room => room.id === message.chatroom_id)
        chatroom.messages = [...chatroom.messages, message]
        setChatrooms(chatroomsCopy)
    }

    return (
        
        <Grid>
            <ActionCableConsumer 
                channel={{ channel: 'ChatroomsChannel'}}
                onReceived={handleReceivedChatroom}
            />
            {
                chatrooms.length ? 
                <Cable
                    chatrooms={chatrooms}
                    handleReceivedMessage={handleReceivedMessage}
                /> :
                null
            }


            <Grid.Column className="noPadding" width={5}>
                <Channels channels={getChannelNames(chatrooms)} handleClick={setSelectedChannel}/>
            </Grid.Column>
            <Grid.Column width={11}>
                <Conversation conversation={getSelectedChannel(chatrooms, selectedChannel)} currentUser={user}/>
                {selectedChannel ? <MessageForm selectedChannel={getSelectedChannel(chatrooms, selectedChannel)} user={user} /> : null }
            </Grid.Column>
        </Grid>
        
    );
};

export default ChatContainer;
