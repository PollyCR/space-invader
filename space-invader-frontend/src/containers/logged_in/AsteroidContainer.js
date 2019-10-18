import React, { useState, useEffect } from "react";
import Asteroid from '../../components/Asteroid';
import AsteroidSelector from '../../components/AsteroidSelector'

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
        <div>
            <AsteroidSelector asteroids = {asteroids} setSelectedAsteroid = {setSelectedAsteroid} selectedAsteroid = {selectedAsteroid} />
            <Asteroid  asteroid = {findAsteroid()}/>
        </div>
    );
}

export default AsteroidContainer;
