import React from 'react';
import {Container, Spinner} from 'react-bootstrap'
import classes from './Spinner.css';


const spinner = () => (
    <div className={classes.SpinnerContainer}>
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
)

export default spinner;