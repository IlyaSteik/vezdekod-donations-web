import React from 'react';
import '../css/Card.css';

export class Card extends React.Component {

    render() {
        return (
            <div style={this.props.style} className='card__'>{this.props.children}</div>
        );
    }
}