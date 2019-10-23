import React, { useState, useEffect, useRef } from "react";
import { Placeholder, Grid } from "semantic-ui-react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Launch = props => {
  let [time, setTime] = useState(0);

  useInterval(() => {
    setTime(Date.parse(props.selectedLaunch.net) - Date.parse(new Date()));
  }, 500);

  const getCountdown = () => {
    let days = time / 1000 / 60 / 60 / 24;
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = Math.floor((minutes - Math.floor(minutes)) * 60);

    let showTime = time => {
      return Math.floor(time) < 10 ? `0${Math.floor(time)}` : Math.floor(time);
    };
    return `${showTime(days)}:${showTime(hours)}:${showTime(
      minutes
    )}:${showTime(seconds)}`;
  };

  return (
    <div>
      <Grid padded>
      {props.selectedLaunch ? (
        <Grid.Row>Name: {props.selectedLaunch.name}</Grid.Row>
      ) : (
        <Placeholder />
      )}
      {props.selectedLaunch ? (
        <Grid.Row>Location: {props.selectedLaunch.location.name}</Grid.Row>
      ) : (
        ""
      )}
      {props.selectedLaunch.net ? (
        <Grid.Row>Date/Time: {props.selectedLaunch.net}</Grid.Row>
      ) : (
        ""
      )}
      {props.selectedLaunch.net ? <Grid.Row>Countdown: {getCountdown()}</Grid.Row> : ""}

      {props.selectedLaunch.rocket.agencies ? (
        <Grid.Row>Agency: {props.selectedLaunch.rocket.agencies[0].name}</Grid.Row>
      ) : (
        ""
      )}
      </Grid>
    </div>
  );
};

export default Launch;
