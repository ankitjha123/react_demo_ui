import React from 'react';
import {Container, Alert} from 'react-bootstrap'

import classes from './Alert.css'

const alertContainer = (props) => (
    <Container>
        <div className={classes.AlertContainer}>
        <Alert variant="danger" dismissible>
            <Alert.Heading>{props.heading}</Alert.Heading>
                <p>
                    {props.children}
                </p>
        </Alert>
        </div>
    </Container>
);

export default alertContainer;