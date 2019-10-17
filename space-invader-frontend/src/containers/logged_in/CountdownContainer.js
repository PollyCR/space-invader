import React, {useEffect, useState} from 'react';
import Launch from '../../components/Launch';


const CountdownContainer = () => {

    const [launch, setLaunch] = useState({})

    useEffect(() => {

      fetch("http://localhost:3000/api/launch")
        .then(resp => resp.json())
        .then(data => {
            setLaunch(data.launches[0])
        })
    }, []);

    return (
        <div><Launch launch = {launch}/>
        </div>
    );
}

export default CountdownContainer;
