import React, {useState, useEffect} from "react";
import Channels from "../../components/Channels";
import Conversation from "../../components/Conversation";
import MessageForm from "../../components/MessageForm";
import { Grid } from "semantic-ui-react";
import Adapter from '../../adapters/BackendAdapter';
import '../../Chat.css'

const ChatContainer = ({user}) => {

    const [chatrooms, setChatrooms] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        Adapter.get(Adapter.CHATROOMS_URL).then(setChatrooms)
    }, [])

    const getChannelNames = chatrooms => chatrooms.map(room => room.name)

    const getSelectedChannel = (chatrooms, selectedChannel) => chatrooms.find(room => room.name === selectedChannel)

    return (
        
        <Grid>
            <Grid.Column className="noPadding" width={5}>
                <Channels channels={getChannelNames(chatrooms)} handleClick={setSelectedChannel}/>
            </Grid.Column>
            <Grid.Column width={11}>
                <Conversation conversation={getSelectedChannel(chatrooms, selectedChannel)} user={user}/>
                {selectedChannel ? <MessageForm selectedChannel={getSelectedChannel(chatrooms, selectedChannel)} user={user} /> : null }
            </Grid.Column>
        </Grid>
        
    );
};

export default ChatContainer;
