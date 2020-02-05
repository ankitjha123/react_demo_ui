import React from 'react';
import {Jumbotron, Button, ListGroupItem} from 'react-bootstrap';

import  classes from './Home.css';
import imgUrl from '../../assets/images/main-background.jpg'


var home = (props) => (
    <React.Fragment>
        <div className={classes.ImageContainer}>
            <div className={classes.ImageContainer} style ={{ backgroundImage: 'url(' + imgUrl + ')', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className={classes.MainContainer} >
            <section>
                <Jumbotron>
                <h1>REACT BOOTSTRAP</h1>
                <p>
                <h3 className={classes.contentContainer}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure quaerat deleniti debitis quisquam eius illo aut praesentium maiores quidem.
                </h3>
                </p>
                <p>
                <a href='/contactus'>
                <Button variant="outline-primary">Contact us to know more</Button>
                </a>
                </p>
                </Jumbotron>
            </section>
        </div>
    </React.Fragment>
)

export default home;