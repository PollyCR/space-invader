import React from 'react';
import APODContainer from './APODContainer';
import CountdownContainer from './CountdownContainer';
import AsteroidContainer from './AsteroidContainer';
import {Grid} from 'semantic-ui-react'

const DashboardContainer = () => {
    return (
        <div>
            <Grid>
                <Grid.Column width={8}>
            <APODContainer />
            </Grid.Column>
            <Grid.Column width={8}>
            <CountdownContainer />
            <AsteroidContainer />
            </Grid.Column>
            </Grid>
        </div>
    );
}

export default DashboardContainer;
