import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

import classes from './Genre.css'

class Genre extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.id === this.props.id) {
            return false;
        } else {
            return true;
        }
    }


    render() {
        return(
            <div>
                <a  onClick={this.props.clicked}>
                    <Card className={[classes.CardContainer, classes.defaultStyle]}>
                        <div className={classes.fontStyle}>
                            {this.props.children}
                        </div>
                    </Card>
                </a>
            </div>
        )
    }
}

export default Genre;