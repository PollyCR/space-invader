import React, {useState, useEffect} from "react";
import Channels from "../../components/Channels";
import Conversation from "../../components/Conversation";
import MessageForm from "../../components/MessageForm";
import { Grid } from "semantic-ui-react";
import Adapter from '../../adapters/BackendAdapter';
import '../../Chat.css'
import Cable from "../../components/Cable";

class ChatContainer extends React.Component {

    state = {
        chatrooms: [],
        selectedChannel: null
    }
    // const [chatrooms, setChatrooms] = useState([]);
    // const [selectedChannel, this.setSelectedChannel] = useState(null);

    componentDidMount = () => (
        Adapter.get(Adapter.CHATROOMS_URL).then(this.setChatrooms)
    )

    setChatrooms = chatrooms => this.setState({chatrooms})
    setSelectedChannel = selectedChannel => this.setState({selectedChannel})

    getChannelNames = chatrooms => chatrooms.map(room => ({id: room.id, name: room.name}))

    getSelectedChannel = (chatrooms, selectedChannel) => chatrooms.find(room => room.id === selectedChannel)

    handleReceivedChatroom = response => {
        const { chatroom } = response;
        this.setChatrooms([...this.state.chatrooms, chatroom])
    };

    handleReceivedMessage = response => {
        const {message} = response
        const chatroomsCopy = [...this.state.chatrooms]
        const chatroom = chatroomsCopy.find(room => room.id === message.chatroom_id)
        chatroom.messages = [...chatroom.messages, message]
        this.setChatrooms(chatroomsCopy)
    }

    render() {
        const {chatrooms, selectedChannel} = this.state
    return (
        
        <Grid>
            <Cable 
                channel={{ channel: 'ChatroomsChannel'}}
                url={Adapter.BASE_WS_URL}
                onReceived={this.handleReceivedChatroom}
            />
            {
                this.state.chatrooms.length ? 
                this.state.chatrooms.map(room => <Cable
                    key={room.id}
                    channel={{channel: "MessagesChannel", chatroom: room.id}}
                    url={Adapter.BASE_WS_URL}
                    onReceived={this.handleReceivedMessage}
                />) :
                null
            }


            <Grid.Column className="noPadding" width={5}>
                <Channels channels={this.getChannelNames(chatrooms)} handleClick={this.setSelectedChannel}/>
            </Grid.Column>
            <Grid.Column width={11}>
                <Conversation conversation={this.getSelectedChannel(chatrooms, selectedChannel)} currentUser={this.props.user}/>
                {selectedChannel ? <MessageForm selectedChannel={this.getSelectedChannel(chatrooms, selectedChannel)} user={this.props.user} /> : null }
            </Grid.Column>
        </Grid>
        
    );
    }
};

export default ChatContainer;
