import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';
import Jan from '../assets/Jan.jpg'


class Card extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }));
    }

    render() {
        const styles = {
            card: {

                marginLeft: "auto",
                marginRight: "auto",

                border: '1px solid #eeeeee',
                borderRadius: '3px',
                padding: '15px',
                width: '400px',

            },
            image: {
                height: '100px',
                width: '125px'
            }
        };

        return (
            <ReactCardFlip isFlipped={ this.state.isFlipped }>
              <div key="front" style={ styles.card }>
                Welcome to my site
                <br/>
                <button onClick={ this.handleClick }>
                  Flip Card
                </button>
              </div>
              <div key="back" style={ styles.card }>
                <img style={ styles.image } src={ Jan } />
                <button onClick={ this.handleClick }>
                  Flip Card
                </button>
              </div>
            </ReactCardFlip>
            );
    }
}
;

Card.propTypes = {
    styles: PropTypes.object
};

export default Card;