import React from 'react';

const Launch = props => {
    if (props.launch.id) {return (
        <div>
           {props.launch.id}
    </div> )} else {
return (<div>Loading...</div>)
    }
    
}

export default Launch;
