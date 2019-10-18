import React, { useState, useEffect } from "react";
import Asteroid from '../../components/Asteroid';
import AsteroidSelector from '../../components/AsteroidSelector'
import {Container} from 'semantic-ui-react'

const AsteroidContainer = () => {

    const [asteroids, setAsteroids] = useState([]);
    const [selectedAsteroid, setSelectedAsteroid] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3000/api/asteroid")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            setAsteroids(data)
            setSelectedAsteroid(data[0].id);
        })
    }, []);

    const findAsteroid = () => {
        return asteroids.find(asteroid => asteroid.id === selectedAsteroid)
    }

    return (
        <Container>
            <AsteroidSelector asteroids = {asteroids} setSelectedAsteroid = {setSelectedAsteroid} selectedAsteroid = {selectedAsteroid} />
            <Asteroid  asteroid = {findAsteroid()}/>
            </Container>
    );
}

export default AsteroidContainer;
