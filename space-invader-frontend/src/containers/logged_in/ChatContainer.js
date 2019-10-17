import React, {useState, useEffect} from "react";
import Channels from "../../components/Channels";
import Conversation from "../../components/Conversation";
import MessageForm from "../../components/MessageForm";
import { Grid } from "semantic-ui-react";
import Adapter from '../../adapters/BackendAdapter';

const ChatContainer = () => {

    const [chatrooms, setChatrooms] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        Adapter.get(Adapter.CHATROOMS_URL).then(setChatrooms)
    }, [])

    const getChannelNames = chatrooms => chatrooms.map(room => room.name)

    const getSelectedChannel = (chatrooms, selectedChannel) => chatrooms.find(room => room.name === selectedChannel)

    return (
        <div>
        <Grid padded>
            <Grid.Column width={8}>
                <Channels channels={getChannelNames(chatrooms)} handleClick={setSelectedChannel}/>
            </Grid.Column>
            <Grid.Column width={8}>
            <Grid.Row>
                <Conversation conversation={getSelectedChannel(chatrooms, selectedChannel)}/>
            </Grid.Row>
            <Grid.Row>
                <MessageForm />
            </Grid.Row>
            </Grid.Column>
        </Grid>
        </div>
    );
};

export default ChatContainer;
