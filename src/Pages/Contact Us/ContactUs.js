import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

import MapsContainer from './MapsContainer/MapsContainer'
import classes from './ContactUs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgUrl from '../../assets/images/cartographer.png'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


class Contactus extends Component {

    componentDidMount(){
        document.body.style.backgroundImage=`url(${imgUrl})`;
    }
    render(){
        return (
             <div className={classes.MainContainer}>
        
                <div className={classes.CardContainer}>
                    <Card className={classes.CardStyle}>
                        <Card.Title style={{fontSize: '22px'}}><b>Contact</b></Card.Title>
                        <Card.Body >
                            <b>Address :</b><br/><br/>
                            <b>Phone : </b><br/>
                        </Card.Body>
                        <Card.Footer className={classes.IconContainer}>
                            <div className={classes.IconStyle}>
                                <a
                                    href="FB_LINK"
                                    className="facebook social"
                                    >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>
                            <div className={classes.IconStyle}>
                                    <a href="LINKEDIN_LINK" className="linkedin social">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </a>
                            </div>
                            <div className={classes.IconStyle}>
                                    <a href="TWITTER_LINK" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                            </div> 
                        </Card.Footer>
                    </Card>
                </div>
           
             
                <div className={classes.MapsCardContainer}>
                    <MapsContainer/>
                </div>
          
            </div>
        )
    }
  
}

export default Contactus;
