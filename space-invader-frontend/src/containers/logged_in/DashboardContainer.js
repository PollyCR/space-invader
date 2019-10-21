import React from "react";
import APODContainer from "./APODContainer";
import CountdownContainer from "./CountdownContainer";
import AsteroidContainer from "./AsteroidContainer";
import { Grid } from "semantic-ui-react";

const DashboardContainer = () => {
  return (
    <Grid>
       <Grid.Row columns={1}>
       <Grid.Column width={16}>
          <APODContainer />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
        <Grid.Column width={8}>
          <CountdownContainer />
          </Grid.Column>
          <Grid.Column width={8}>
          <AsteroidContainer />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    
  );
};

export default DashboardContainer;
