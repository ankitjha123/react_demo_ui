import React from 'react';
import {Jumbotron, Navbar, Container, Button} from 'react-bootstrap';

import classes from './Footer.css'

var footer = (props) => (
    
    <div >
        <footer className={classes.MainContainer}>
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom" sticky="bottom">
                <Container fluid>
                    <Navbar.Brand>© Made by Ankit ;)</Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    </div>
        
)

export default footer;