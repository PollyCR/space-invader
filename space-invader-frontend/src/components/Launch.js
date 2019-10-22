import React, { useState, useEffect, useRef } from "react";
import { Placeholder } from "semantic-ui-react";

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
      {props.selectedLaunch ? (
        <p>Name: {props.selectedLaunch.name}</p>
      ) : (
        <Placeholder />
      )}
      {props.selectedLaunch ? (
        <p>Location: {props.selectedLaunch.location.name}</p>
      ) : (
        ""
      )}
      {props.selectedLaunch.net ? (
        <p>Date/Time: {props.selectedLaunch.net}</p>
      ) : (
        ""
      )}
      {props.selectedLaunch.net ? <p>Countdown: {getCountdown()}</p> : ""}

      {props.selectedLaunch.rocket.agencies ? (
        <p>Agency: {props.selectedLaunch.rocket.agencies[0].name}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Launch;
