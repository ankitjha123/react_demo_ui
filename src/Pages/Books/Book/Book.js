import React from 'react';
import { Card, OverlayTrigger, Popover } from 'react-bootstrap'

import classes from './Book.css'
// import { Card,CardFooter } from 'react-bootstrap/Card';

const book = (props) => {
    
    return (
        <OverlayTrigger
        placement="auto"
        delay={{ show: 200, hide: 400 }}
        flip
        trigger= {['hover']}
        overlay={<Popover>
        <Popover.Title as="h3">{props.title}</Popover.Title>
        <Popover.Content className={classes.popoverDesign}>
            <b>Author : {props.author}</b><br/>
            {props.description != ''? <><b>About the book :</b> {props.description}</> : null} 
        </Popover.Content>

        </Popover>}
        >
            <Card style={{ width: '17rem', height: '25rem'}} className={classes.CardContainer} onClick={props.clicked}>
                
                <Card.Img  className={classes.imgContainer} variant="top" src={props.imageSrc} />
                
                {/* <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Author : {props.author}
                    </Card.Text>
                </Card.Body> */}
                <Card.Footer className={classes.cardFooter}>
                    <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <b>Author :</b> {props.author}
                        </Card.Text>
                </Card.Footer>
            </Card>
        </OverlayTrigger>
    )
}

export default book;