import React from 'react';

const Channels = ({channels, handleClick}) => {
    return (
        <div>
            <h1>Channels</h1>
            <ul>
                {channels ? channels.map(channel => <li onClick={() => handleClick(channel)}>{channel}</li>) : null}
            </ul>
        </div>
    );
}

export default Channels;
