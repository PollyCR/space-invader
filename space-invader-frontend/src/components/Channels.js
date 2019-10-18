import React from 'react';

const Channels = ({channels, handleClick}) => {
    return (
        <>
            <h1>Channels</h1>
            <ul>
                {channels ? channels.map(channel => <li key={channel} onClick={() => handleClick(channel)}>{channel}</li>) : null}
            </ul>
        </>
    );
}

export default Channels;
