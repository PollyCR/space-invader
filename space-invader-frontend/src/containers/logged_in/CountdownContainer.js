import React, {useEffect, useState} from 'react';
import Launch from '../../components/Launch';
import LaunchSelector from '../../components/LaunchSelector'
import {Container, Placeholder} from 'semantic-ui-react'

const CountdownContainer = () => {

    const [launches, setLaunches] = useState([])
    const [selectedLaunch, setSelectedLaunch] = useState(null);


    useEffect(() => {

      fetch("http://localhost:3000/api/launch")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            setLaunches(data.launches)
            setSelectedLaunch(data.launches[0].id);
        })
    }, [])

    const findLaunch = () => {
       return launches.find(launch => launch.id === selectedLaunch) 
        // return launches.find(launch => launch.id === selectedLaunch)
    } 

    return (
    <Container>{launches.length > 0 && <LaunchSelector launches = {launches} setSelectedLaunch = {setSelectedLaunch} />}
     {selectedLaunch && <Launch selectedLaunch = {findLaunch()} />}</Container>
 
        // <Container> <Launch selectedLaunch = {findLaunch()} setSelectedLaunch = {setSelectedLaunch} launches = {launches}/></Container>
        
    );
}
export default CountdownContainer;
