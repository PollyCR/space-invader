import React, { useState, useEffect } from "react";
import Asteroid from '../../components/Asteroid';
import AsteroidSelector from '../../components/AsteroidSelector'

const AsteroidContainer = () => {

    const [asteroids, setAsteroids] = useState([]);
    const [selectedAsteroid, setSelectedAsteroid] = useState(null);

    useEffect(() => {
      let date = new Date();
      let year = date.getFullYear();
      let month =
        date.getUTCMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      let day =
        date.getDate() < 9 ? `0${date.getDate() + 1}` : date.getDate() + 1;
      let format = `${year}-${month}-${day}`;
      fetch("http://localhost:3000/api/asteroid")
        .then(resp => resp.json())
        .then(data => {
            setAsteroids(data.near_earth_objects[format])
            setSelectedAsteroid(data.near_earth_objects[format][0].id);
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
