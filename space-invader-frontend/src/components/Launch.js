import React from "react";
import { Placeholder } from "semantic-ui-react";

const Launch = props => {
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
      {props.selectedLaunch.net ? <p>Time: {props.selectedLaunch.net}</p> : ""}

      {props.selectedLaunch.rocket.agencies ? (
        <p>Agency: {props.selectedLaunch.rocket.agencies[0].name}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Launch;
