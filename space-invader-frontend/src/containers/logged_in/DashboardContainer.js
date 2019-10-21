import React from "react";
import APODContainer from "./APODContainer";
import CountdownContainer from "./CountdownContainer";
import AsteroidContainer from "./AsteroidContainer";
import { Grid } from "semantic-ui-react";

const DashboardContainer = () => {
  return (
    <div>
      <Grid>

          <APODContainer />


          <CountdownContainer />

          <AsteroidContainer />

      </Grid>
    </div>
  );
};

export default DashboardContainer;
