import React from 'react';
import {Container} from 'semantic-ui-react'
import APOD from '../../components/APOD';
const APODContainer = () => {
    return (
        <div>
               <Container><APOD /></Container>
        </div>
    );
}

export default APODContainer;
